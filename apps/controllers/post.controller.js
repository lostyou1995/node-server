var Post = require("../models/post.model");

module.exports.index = async function(req, res) {
    var Posts = await Post.find();
    res.json(Posts);
};

module.exports.create = async function(req, res) {
    var post = await Post.create(req.body);
    res.json(post);
};