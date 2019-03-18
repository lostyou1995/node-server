var Account = require("../models/account.model");

module.exports.create = async function(req, res) {
    var account = await Account.create(req.body);
    res.json(account);
};
