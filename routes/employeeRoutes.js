const employeeModel = require("../models/employeeModel");
const express = require("express");
const mongoose = require("mongoose");
const app = express.Router();

//get all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await employeeModel.find();
    res.status(200).send(employees);
  } catch (error) {
    res.status(400).send.apply(error);
  }
});

/*const employeeSchema = mongoose.Schema(
  {
  "first_name": "Jhon ",
  "last_name": "doe",
  email: jhondoeemailemployee@gmail.com,
  gender: male ,
  salary:50000.00,
}*/
// create new employee
app.post("/employees", async (req, res) => {
  try {
    const newEmployee = new employeeModel(req.body);
    const employee = await newEmployee.save();
    res.status(201).send("employee created successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

//get  employee by id
app.get("/employees/:eid", async (req, res) => {
  try {
    const employee = await employeeModel.findById(req.params.eid);
    if (employee) res.status(200).send(employee);
    else {
      res.status(201).send("employee id not found");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// //update employee by id
app.put("/employees/:eid", async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndUpdate(
      req.params.eid,
      req.body
    );
    if (employee) res.status(200).send("successfuly updated ");
    res.status(201).send("employee id not found");
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete employee by id
app.delete("/employees/:eid", async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndDelete(req.params.eid);
    if (employee)
      res
        .status(201)
        .send(
          " employee " +
            employee.first_name +
            " " +
            employee.last_name +
            " successfuly deleted "
        );
    res.status(204).send("employee id not found");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = app;
