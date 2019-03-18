var express = require("express");
var router = express.Router();
var controller = require("../controllers/account.controller");

// Create account
router.post("/create", controller.create);

module.exports = router;

