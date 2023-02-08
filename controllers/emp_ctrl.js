var Department = require('../model/departments')
const employee = require('../model/employee')

// get all employees

const get_employee = (req, res) => {
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

}

// insert a new employee
var employee_insert = (req, res) => {
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
}


module.exports = {
    get_employee, employee_insert
}