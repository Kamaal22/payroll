var express = require('express')
var app = express()
var User = require('../model/user')
//var Salary = require('../model/salary')
var Department = require('../model/departments')
var employee = require('../model/employee')
var salary = require ('../model/salary')
var payment = require('../model/payment')


var userCTRL = require('../controllers/User_ctrl')
var deptCTRL = require('../controllers/Department_ctrl')
var gotoPages = require('../controllers/goToPages')
var empCTRL = require('../controllers/emp_ctrl')
var loginCTRL = require('../controllers/login_ctrl')
var salaryCTRL = require('../controllers/salary_ctrl')





// get root
app.get('/', gotoPages.home_page)
// get root
app.get('/login', gotoPages.login_page)
//login page handling
app.post('/check_login', loginCTRL.check_login)

    //get payment
//get salary form
app.get('/payment', gotoPages.payment_page)
//save some data to salary form
app.post('/save_salary', salaryCTRL.salary_insert)



    //Salary Report
 app.get('/salary_rpt', (req, res) => {
        res.render('salary_rpt', {
            data: salary
        })
    })
//employee profile report for the specific employee
    app.get('/employee_profile',(req,res)=>{
        res.render('employee_profile',{
            data:[]
        })
    })
//get employee

    //generate Actual Report Demo
   //app.post('/sal_rpt',(re,res)=>{
    //Salary.find({
      //  day: {
        //    $From: ISODate("from_date"),
          //  $To: ISODate("to_date")
        //}
    //})
   //})

    //GET USERS
app.get('/users', userCTRL.get_users)


//SAVE USERS
app.post('/save_user', userCTRL.insert_user)

//edit users 
app.post('/edit_user', userCTRL.update_user)


app.get('/department', deptCTRL.get_departments)

//save department
app.post('/save_dept', deptCTRL.dept_insert)
//edit Department 
app.post('/edit_dept', deptCTRL.dept_update)


// get  employee info
app.get('/employee', empCTRL.get_employee)
//save employeee
app.post('/save_emp', empCTRL.employee_insert)
//edit employee
app.post('/edit_emp', empCTRL.employee_update)




module.exports = app