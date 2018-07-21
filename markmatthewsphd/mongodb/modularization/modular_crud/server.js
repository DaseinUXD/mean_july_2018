// Require path
var path = require("path");

// Require epxress and create express app
var express = require("express");
var app = express();

// Require body-parser to be able to send POST data
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded( {extended: true} ));

// Link to mongoose.js
require("./server/config/mongoose.js");

// Link to routes.js and pass in "app" variable
require("./server/config/routes.js")(app);

// Static content
app.use(express.static(path.join(__dirname + "/client/static")));

// Set up views directory & ejs
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

// Listen on port 8000
app.listen(8000, function() {
    console.log("Node.js is running on port 8000");
});