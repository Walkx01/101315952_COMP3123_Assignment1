const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const DB_URL =
  "mongodb+srv://Walker_admin:mypassword@cluster0.ij2nvg9.mongodb.net/?retryWrites=true&w=majority";

//  CONNECTING TO DATABASE
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });



app.get("/", (req, res) => {
  res.send("<h1>welcome to assigment 1 main page</h1>");
});

app.listen(7000, (req, res) => {
  console.log("server listening on  port 7000");
});
