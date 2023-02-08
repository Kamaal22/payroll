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
    let salary = new Salary({
        jobTitle: req.body.jobTitle,
        grade: req.body.grade,
        minimumSalary: req.body.minimumSalary,
        maximumSalary: req.body.maximumSalary,
        medianSalary: req.body.medianSalary,
        currency: req.body.currency
    })
    salary.save().then(()=>{
        res.redirect('/salary')
    }).catch(error =>{
        res.json({
            message: 'Data has not been saved'+ error
        })
    })
}

module.exports = {
    salary_insert, get_salary
}