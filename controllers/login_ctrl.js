var User = require('../model/user')


var check_login = (req, res) => {
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
}

module.exports = {
    check_login
}