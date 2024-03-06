// const { Pool } = require("pg");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const express = require("express");
// const dotenv = require("dotenv");

// const app = express();
// dotenv.config();
// app.use(cors());
// app.use(bodyParser.json());

// // asuuun
// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

// const pgConfig = {
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: PGPORT,
//   ssl: {
//     require: true,
//   },
// };

// const pool = new Pool(pgConfig);

// app.get("/greate", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     client.query(
//       `CREATE TABLE record (ID INT NOT NULL UNIQUE constraint, NAME VARCHER (255) constraint, AMOUNT INT NOT NULL UNIQUE constraint)`
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }
//   res.status(200).send({ message: "successfully greate" });
// });
