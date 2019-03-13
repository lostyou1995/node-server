var express = require("express");
const bodyParser = require('body-parser')
var cors = require('cors');
// Define route
var producrRoute = require("./apps/routes/product.router");
var app = express();

// Connect to mongo db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CMS', {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/product", producrRoute);

app.listen(6969);