var mongoose = require('mongoose')

var emp_schema = mongoose.Schema({
    empname: String,
    phone: String,
    email: String,
    address: String,
    salary: Number,
    DOB: Date,
    qualification: String,
    Department: { type: mongoose.Types.ObjectId }
})


var employee = mongoose.model('employee', emp_schema)
module.exports = employee