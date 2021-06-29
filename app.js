const express = require("express");
const db = require("./db/models")
const app = express();
app.use(express.json())









db.sequelize.authenticate();
app.listen(8080);