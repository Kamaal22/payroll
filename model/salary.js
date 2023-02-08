const mongoose = require('mongoose');

const salarySchema = new mongoose.Schema({
  jobTitle: String,
  grade: String,
  minimumSalary: Number,
  maximumSalary: Number,
  medianSalary: Number,
  currency: String
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;
