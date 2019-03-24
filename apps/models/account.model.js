const mongoose = require("mongoose");
var account = new mongoose.Schema({
    username: String,
    password: String,
    address: String,
    age: Number,
    gender: String,
    email: String
});

var Account = mongoose.model("Account", account, "account");
module.exports = Account;