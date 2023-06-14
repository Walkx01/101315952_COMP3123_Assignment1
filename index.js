const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var cors = require("cors");

app.use(
  cors({
    origin: true,
  })
); // Use this after the variable declaration

const usersRoutes = require("./routes/userRoutes");
const emplyeesRoutes = require("./routes/employeeRoutes");

const DB_URL =
  process.env.MONGODB_URI ||
  "mongodb+srv://Walker_admin:Helloworld101@cluster0.ij2nvg9.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority";

//  CONNECTING TO DATABASE
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas index");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use("/api/user/", usersRoutes);
app.use("/api/emp/", emplyeesRoutes);

app.get("/", (req, res) => {
  res.send("<h1>welcome to assigment 1 main page</h1>");
});

app.listen(port, (req, res) => {
  console.log("server listening on  port 3000");
});
