const { Pool } = require("pg");

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

exports.getGreate = async (req, res) => {
  const client = await pool.connect();
  const newUser = req.body;
  console.log("newUser", newUser);

  const Query = `INSERT INTO register (name,email,password,id) VALUES ('${newUser.name}', '${newUser.email}' ,'${newUser.password}' ,'${newUser.id}')`;
  try {
    client.query(Query);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  res.status(200).send({ message: "success" });
};
