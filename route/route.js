var express = require('express')
var app = express()
var User = require('../model/user')

var Department = require('../model/departments')
const employee = require('../model/employee')
const res = require('express/lib/response')



// get dashboard
app.get('/', (req, res) => {
        res.render('home', {
            data: []
        })
    })
    //GET USERS
app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.render('users', {
            data: users
        })
    })
})

//SAVE USERS
app.post('/save_user', (req, res) => {
    console.log(req.body)
    var user_data = new User({
        name: req.body.name,
        phone: req.body.phone,
        user_name: req.body.user_name,
        password: req.body.password
    })
    user_data.save().then((d) => {
        res.redirect('users')
    })
})

//edit users 
app.post('/edit_user', (req, res) => {
    var data = {
        name: req.body._name,
        phone: req.body._phone,
        user_name: req.body._user_name,
    }
    User.findOneAndUpdate({ _id: req.body._id }, data).then((d) => {
        res.redirect('users')
    })

})


app.get('/department', (req, res) => {
    Department.find({}).then((depts) => {
        res.render('department', {
            data: depts
        })
    })
})
app.post('/save_dept', (req, res) => {
    var dept = new Department({
        name: req.body.name,
        desc: req.body.desc,

    })
    dept.save().then((d) => {
        res.redirect('department')
    })
})





// employee
app.get('/employee', (req, res) => {
    employee.aggregate([{
            $lookup: {
                from: 'departments',
                localField: 'Department',
                foreignField: '_id',
                as: 'departments'
            },


        },
        {
            $unwind: '$departments'
        }
    ], (err, emp) => {
        console.log('emp', emp)
        Department.find({}).then((dept) => {
            res.render('employee', {
                data: dept,
                emp: emp


            })
        })
    })

})




app.post('/save_emp', (req, res) => {
    var emp = new employee({
        empname: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        salary: req.body.salary,
        email: req.body.email,
        qualification: req.body.qualification,
        DOB: req.body.DOB,
        salary: req.body.salary,
        Department: req.body.department_id

    })
    emp.save().then((d) => {
        res.redirect('employee')
    })
})

app.get('/login', (req, res) => {
        res.render('login')
    })
    //login page handling
app.post('/check_login', (req, res) => {
    User.find({ user_name: req.body.user_name, password: req.body.password })
        .then((data) => {
            console.log(data)
            if (data.length > 0) {
                res.render('home', {
                    data: data
                })
            } else {
                res.render('login')
            }

        })
})



module.exports = app