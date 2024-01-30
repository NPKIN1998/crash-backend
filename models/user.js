const mongoose = require('mongoose')


const Schema = mongoose.Schema

const user = new Schema({
    
 username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    default: 1000
  },
  bet_amount: {
    type: Number,
    default: 0
  },
  payout_multiplier: {
    type: Number,
    default: 0
  },

});

module.exports = mongoose.model("User", user);