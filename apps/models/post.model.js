const mongoose = require("mongoose");
var post = new mongoose.Schema({
    price: Number,
    name: String,
    image: String,
    description: String,
    status: Boolean
});

var Post = mongoose.model("Post", post, "post");
module.exports = Post;