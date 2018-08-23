var express = require('express');
var bodyParser = require('body-parser');


var port = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));



var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("/controllers/burgerControl.js");

app.use("/", routes);

app.listen(port);
