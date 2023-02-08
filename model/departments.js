var mongoose = require('mongoose')

var dept_schema = mongoose.Schema({
    name: String,
    desc: String
})
var depts = mongoose.model('department', dept_schema)
module.exports = depts