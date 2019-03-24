var Account = require("../models/account.model");
var md5 = require("md5");
const ERROR_CODE = {
    EXIST: 1
};

module.exports.create = async function(req, res) {
    var hashPassword = md5(req.body.password);
    var username = req.body.username;
    var account = await Account.findOne({username: username},function(err, result) {
        account = result;
    });

    // Check account is exist in db
    if (!account) {
        req.body.password= hashPassword;
        account = await Account.create(req.body);
        res.json(account);
    } else {
        res.json(ERROR_CODE.EXIST);
    }
};
