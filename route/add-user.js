const { Pool } = require("pg");

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    require: true,
  },
});

exports.addUser = async (req, res) => {
  const newUser = req.body;
  const client = await pool.connect();
  console.log("newUser", newUser);

  const Query = `INSERT INTO register (name,email,password,id) VALUES ('${newUser.name}', '${newUser.email}' ,'${newUser.password}' ,'${newUser.id}')`;
  try {
    await client.query(Query);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  res.status(200).send({ message: "User Added successfully" });
};
