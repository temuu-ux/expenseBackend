

// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

// const pgConif = {
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: PGPORT,
//   ssl: {
//     require: true,
//   },
// };

// const pool = new Pool(pgConif);

// async function getPgVersion() {
//   const client = await pool.connect();
//   try {
//     const result = await client.query("SELECT version()");
//     console.log(result.rows[0]);
//   } finally {
//     client.release();
//   }
// }
// getPgVersion();

// app.get("/user", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     client.query("SELECT * FROM users");
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }

//   res.status(200).send({ messasge: "success" });
// });

// app.post("/add-user", async (req, res) => {
//   const newUser = req.body;

//   const client = await pool.connect();
//   console.log("asd");
//   const Query = `INSERT INTO users (name, age, phone, email) VALUES ('${newUser.name}','${newUser.age}','${newUser.phone}','${newUser.email}');`;
//   try {
//     client.query(Query);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     client.release();
//   }
//   res.status(200).send({ message: "User Added successfully" });
// });

// app.get("/init", async (req, res) => {
//   const client = await pool.connect();
//   try {
//     client.query(
//       "CREATE TABLE users (name VARCHAR(255), age INT, phone VARCHAR(255), email VARCHAR(255))"
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }

//   res.status(200).send({ message: "success" });
// });

// app.put("/update", async (req, res) => {
//   // const { name } = req.params;
//   const { name } = req.body;
//   const updatedUser = req.body;

//   const client = await pool.connect();
//   try {
//     const query = `
//       UPDATE users
//       SET age = $1, phone = $2, email = $3
//       WHERE name = $4
//     `;
//     const values = [
//       updatedUser.age,
//       updatedUser.phone,
//       updatedUser.email,
//       name,
//     ];
//     await client.query(query, values);

//     res.status(200).send({ message: "User updated successfully" });
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).send({ error: "Error updating user" });
//   } finally {
//     client.release();
//   }
// });

// app.delete("/delete", async (req, res) => {
//   const { name } = req.body;
//   const client = await pool.connect();

//   try {
//     const query = `DELETE FROM users WHERE name = $1`;

//     await client.query(query, [name]);
//     res.status(200).send({ message: "User deleted successfully" });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }
// });

// delete table;
// app.get("/signUp", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     client.query("DROP TABLE signUp");
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }

//   res.status(200).send({ messasge: "success" });
// });

// Record
// app.get("/greate", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     client.query(
//       `CREATE TABLE record ( ID SERIAL PRIMARY KEY,
//         NAME VARCHAR(255) NOT NULL,
//         AMOUNT INT NOT NULL)`
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }
//   res.status(200).send({ message: "successfully greate" });
// });
// app.post("/record-Add", async (req, res) => {
//   const newRecord = req.body;
//   const client = await pool.connect();
//   const Query = `INSERT INTO record (id,name,amount) VALUES ('${newRecord.id}','${newRecord.name}','${newRecord.amount}')`;

//   try {
//     client.query(Query);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }
//   res.status(200).send({ message: "successfully record add" });
// });

// app.post("/addTable", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     client.query(`ALTER TABLE signUp ADD id VARCHAR(255) `);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }
//   res.status(200).send({ message: "success add" });
// });

// app.post("/update", async (req, res) => {
//   const client = await pool.connect();
//   const newUser = req.body;
//   try {
//     client.query(`UPDATE signUp SET id='${newUser.id}' VARCHAR(255)`);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release;
//   }
//   res.status(200).send({ message: "success update" });
// });

// app.get("/uy", async (req, res) => {
//   const client = await pool.connect();

//   try {
//     client.query(
//       "CREATE TABLE register ( id varchar(250) NOT NULL ,email varchar(50) NOT NULL PRIMARY KEY, name VARCHAR(50) NOT NULL, password VARCHAR(50));"
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }
//   res.status(200).send({ message: "successfully greate" });
// });



//
