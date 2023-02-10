var Department = require('../model/departments');

const get_departments = (req, res) => {
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

const dept_update = (req, res) => {
    var data = {
        name: req.body._name,
       desc:req.body._desc
    }
    Department.findOneAndUpdate({ _id: req.body._id }, data).then((d) => {
        res.redirect('department')
    })
}
module.exports = {
    get_departments, dept_insert, dept_update
}