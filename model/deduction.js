var mongoose = require('mongoose')

var deduction_schema = mongoose.Schema({
    name: String,
    phone: String,
    user_name: String,
    password: String
})
var user = mongoose.model('user',deduction_schema)
module.exports = user