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

app.get("/add-user", async (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  const client = await pool.connect();

  const Query = `INSERT INTO users (name, age, email) VALUES ('${newUser.name}','${newUser.age}','${newUser.email}');`;
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

app.get("/update", async (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  const client = await pool.connect();
  try {
    client.query(
      `UPDATE users (name, age, email) SET (${(newUser.name =
        "boldoo")}','${(newUser.age = 19)}' ,'${(newUser = "gg@.gmail.com")})`
    );
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  res.status(200).send({ message: "successfully" });
});

app.listen(3004, () => {
  console.log("Server is running on port 3004");
});
