const mongoose = require("mongoose");
var account = new mongoose.Schema({
    username: String,
    password: String,
    address: String,
    age: Number,
    gender: Boolean
});

var Account = mongoose.model("Account", account, "account");
module.exports = Account;