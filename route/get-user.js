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

exports.getUser = async (req, res) => {
  const client = await pool.connect();
  const Query = `SELECT * FROM users`;
  try {
    const users = await client.query(Query);
    res.send({ users });
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};
