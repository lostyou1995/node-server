var express = require("express");
const bodyParser = require('body-parser')
var cors = require('cors');
// Define route
var producrRoute = require("./apps/routes/product.router");
var accountRoute = require("./apps/routes/account.router");
var loginRoute = require("./apps/routes/auth.router");
var app = express();

// Connect to mongo db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/product", producrRoute);
app.use("/api/account", accountRoute);
app.use("/api/auth", loginRoute);
app.listen(6969);