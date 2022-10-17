const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>welcome to assigment 1 main page</h1>");
});
app.listen(7000, (req, res) => {
  console.log("server runnnih at port 7000");
});
