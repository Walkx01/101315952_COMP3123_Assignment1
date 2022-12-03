const userModel = require("../models/userModel.js");
const express = require("express");
const mongoose = require("mongoose");
const app = express.Router();
const bcrypt = require("bcryptjs");

// user create new account
/*  {
"username":"walker Altidor",
"email":"walkeraltidoe@georgebrown.ca",
"password":"mypassword"
}*/
app.post("/signup", async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    const user = await newUser.save();
    res.status(201).send("user created successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// user to login /access the system
app.post("/login", async (req, res) => {
  try {
    userModel.exists(
      { username: req.body.username },
      async function (err, result) {
        if (err) {
          res.status(400).send(err);
        } else if (!result) {
          // no username found
          res
            .status(400)
            .send({ status: false, message: "Invalid Username and password" });
        } else {
          user = await userModel.findById(result._id);
          bcrypt.compare(
            req.body.password,
            user.password,
            function (error, isMatch) {
              if (error) {
                res.status(400).send(error);
              } else if (!isMatch) {
                res.send({
                  status: false,
                  message: "Invalid Username and password",
                });
              } else {
                res.send({
                  status: true,
                  username: req.body.username,
                  message: "User logged in successfully",
                });
              }
            }
          );
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = app;
