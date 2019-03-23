var Account = require("../models/account.model");

module.exports.login = async function(req, res) {
    var username = req.body.username;
    Account.find({username: username}, function(error, success)  {
        if (success && success.length > 0) {
            res.json(success);
        } else {
            res.json("User not exist");
        }
    });
};