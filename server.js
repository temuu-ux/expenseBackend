require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { addUser } = require("./route/add-user");
const { getUser } = require("./route/get-user");
const { getGreate } = require("./route/greate-user");

const app = express();

const router = express.Router();

const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(router);

router.post("/add", addUser);
router.get("/get-users", getUser);
router.post("/greate", getGreate);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
