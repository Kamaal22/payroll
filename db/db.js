var mongoose = require('mongoose')
connectdb = async() => {
    var con = await mongoose.connect('mongodb://127.0.0.1:27017/payroll', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log('conected db', con.connection.host)
}
module.exports = connectdb