const { Pool } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
// const nanoid = require("nanoid");
// const id = nanoid();

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const pgConif = {
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    require: true,
  },
};

const pool = new Pool(pgConif);

app.get("/user", async (req, res) => {
  const client = await pool.connect();

  try {
    client.query("SELECT * FROM users");
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }

  res.status(200).send({ messasge: "success" });
});

app.post("/add-user", async (req, res) => {
  const newUser = req.body;

  const client = await pool.connect();
  console.log("asd");
  const Query = `INSERT INTO users (name, age, phone, email) VALUES ('${newUser.name}','${newUser.age}','${newUser.phone}','${newUser.email}');`;
  try {
    client.query(Query);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
  res.status(200).send({ message: "User Added successfully" });
});

app.get("/init", async (req, res) => {
  const client = await pool.connect();
  try {
    client.query(
      "CREATE TABLE users (name VARCHAR(255), age INT, phone VARCHAR(255), email VARCHAR(255))"
    );
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }

  res.status(200).send({ message: "success" });
});

app.put("/update", async (req, res) => {
  // const { name } = req.params;
  const { name } = req.body;
  const updatedUser = req.body;

  const client = await pool.connect();
  try {
    const query = `
      UPDATE users 
      SET age = $1, phone = $2, email = $3
      WHERE name = $4
    `;
    const values = [
      updatedUser.age,
      updatedUser.phone,
      updatedUser.email,
      name,
    ];
    await client.query(query, values);

    res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send({ error: "Error updating user" });
  } finally {
    client.release();
  }
});

app.delete("/delete", async (req, res) => {
  const { name } = req.body;
  const client = await pool.connect();

  try {
    const query = `DELETE FROM users WHERE name = $1`;

    await client.query(query, [name]);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
