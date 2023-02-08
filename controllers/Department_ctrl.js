var Department = require('../model/departments');

const goDept = (req, res) => {
    Department.find({}).then((depts) => {
        res.render('department', {
            data: depts
        })
    })
}

const dept_insert = (req, res) => {
    var dept = new Department({
        name: req.body.name,
        desc: req.body.desc,

    })
    dept.save().then((d) => {
        res.redirect('department')
    })
}

module.exports = {
    goDept, dept_insert
}