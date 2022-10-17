/*_id Object ID Auto Generate
first_name String (100) Required
last_name String (50) Required
email String(50) Unique
gender String (25) Male/Female/Other
salary Float Required*/

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const employeeSchema = mongoose.Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, maxLength: 50, required: true },
  email: { type: String, unique: true },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  salary: { type: Number, required: true },
});

//creating model from schema
module.exports = mongoose.model("employee", employeeSchema);
