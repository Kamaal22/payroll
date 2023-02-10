var Salary = require('../model/salary')

// get salary
var get_salary = (req, res)=>{
    Salary.find({}).then((salaries)=>{
        res.render('salary', {
            data: salaries
        })
    })
}

// insert salary
var salary_insert = (req, res) => {
    console.log(req.body)
    var data = new salary({
        jobTitle: req.body.jobTitle,
        grade: req.body.grade,
        minimumSalary: req.body.minimumSalary,
        maximumSalary: req.body.maximumSalary,
        medianSalary : req.body.medianSalary,
        currency :req.body.currency
    })
    data.save().then((d) => {
        res.redirect('salary')
    })
}

module.exports = {
    salary_insert, get_salary
}