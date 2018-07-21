const port = 3000;
const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const shell = require('shelljs');
const flash = require('express-flash');
const session = require('express-session');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

// Session Setup
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}

}));

// Flash Setup
app.use(flash());

// Views Engine
app.set('views', path.join(__dirname, './client/views')); // relocated views in the client directory
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// Parser
app.use(bodyParser.urlencoded({extended: true}));
// Static Files
app.use(express.static(path.join(__dirname, './client/static')));  // relocated static files into the client directory
// app.use(express.static(__dirname + '/public'));

// Create a schema
const MongooseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: [2, 'Name must be more than two characters']
    },
    age: {type: Number, required: [true, 'Please enter an age']},
    weight: {type: Number, required: [true, 'Please enter a weight']}
}, {timestamps: true});

// Create a model based on schema
mongoose.model('Mongoose', MongooseSchema);

// Create an object based on the model
const Mongoose = mongoose.model('Mongoose');

// Accessing routes.js
require('./server/config/routes.js')(app);  // relocated the routes to the routes.js file


app.listen(port, function () {
    console.log('listening on port:', port)
});