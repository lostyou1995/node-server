var express = require("express");
var router = express.Router();
var controller = require("../controllers/post.controller")

// Get all post
router.get("/", controller.index);

// Create post
router.post("/create", controller.create);
module.exports = router;