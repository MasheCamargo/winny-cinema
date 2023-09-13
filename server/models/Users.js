const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  dni: String,
  name: String,
  lastname: String,
  date: Date,
  role: String,
  phone: String,
  email: String,
  password: String,
  user: String,
});

const Users = mongoose.model("User", userSchema);

module.exports = Users;
