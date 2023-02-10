const mongoose = require('mongoose');

const pay = new mongoose.Schema({
Employee: { type: mongoose.Types.ObjectId },
  amount: String,
  currency: String,
  date :Date
});

const payment = mongoose.model('payment', pay);

module.exports = payment;
