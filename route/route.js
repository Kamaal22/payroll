var express = require('express')
var app = express()
var userCTRL = require('../controllers/User_ctrl')
var deptCTRL = require('../controllers/Department_ctrl')
var gotoPages = require('../controllers/goToPages')
var empCTRL = require('../controllers/emp_ctrl')
var loginCTRL = require('../controllers/login_ctrl')
var salaryCTRL = require('../controllers/salary_ctrl')


// go to dashboard
app.get('/', gotoPages.home_page)
app.get('/home', gotoPages.home_page)
// go to salary
app.get('/salary', gotoPages.salary_page)
//////////////////////////////////////// USERS
//get users
app.get('/users', userCTRL.get_users)

//save users
app.post('/save_user', userCTRL.insert_user)

//edit users 
app.post('/edit_user', userCTRL.update_user)
//////////////////////////////////////// DEPARTMENTS
//go to department
app.get('/department', deptCTRL.goDept)

// insert department
app.post('/save_dept', deptCTRL.dept_insert)

//////////////////////////////////////// DEPARTMENTS
// get employee
app.get('/employee', empCTRL.get_employee)

// insert employee
app.post('/save_emp', empCTRL.employee_insert)
////////////////////////////////////////login page handling
// go to login
app.get('/', gotoPages.login_page)

// Check Login
app.post('/check_login', loginCTRL.check_login)

////////////////////////////////////// Salary handling

app.post('/save_salary', salaryCTRL.salary_insert)

// get salaries
app.get('/salary', salaryCTRL.get_salary)

module.exports = app