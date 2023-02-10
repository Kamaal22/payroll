

const home_page = (req, res) => {
    res.render('home', {
        data: []
    })
}

const login_page =(req, res) => {
    res.render('login', {
        data: []
    })
}

const salary_page = (req, res) => {
    res.render('salary', {
        data: []
    })
}


const payment_page = (req, res) => {
    res.render('payment', {
        data:payment
    })
}
module.exports = {
    home_page, login_page,salary_page, payment_page
}