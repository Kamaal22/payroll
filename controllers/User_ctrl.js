var User = require('../model/user')


const get_users = (req, res) => {
    User.find({}).then((users) => {
        res.render('users', {
            data: users
        })
    })
}


//SAVE USERS
const insert_user = (req, res) => {
    console.log(req.body)
    let user_data = new User({
        name: req.body.name,
        phone: req.body.phone,
        user_name: req.body.user_name,
        password: req.body.password
    })
    user_data.save().then((d) => {
        res.redirect('users')
    }).catch(error =>{
        res.json({
            message: 'Data has not been saved'
        })
    })
}

//edit users 
const update_user = (req, res) => {
    var data = {
        name: req.body._name,
        phone: req.body._phone,
        user_name: req.body._user_name,
    }
    User.findOneAndUpdate({ _id: req.body._id }, data).then((d) => {
        res.redirect('users')
    })

}

module.exports = {
    insert_user, update_user, get_users
}