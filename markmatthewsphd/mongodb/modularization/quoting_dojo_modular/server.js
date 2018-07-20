const port = 1234;
// moment makes date and time eash
const moment = require('moment');
//require express
const express = require('express');
// make express an app
const app = express();
/*
* *************************************************
* START mongod and mongo !!!!
*
* *************************************************
*/

// connects express to MongoDB
const mongoose = require('mongoose');
// flash messages for error handling
const flash = require('express-flash');
// handle session data
const session = require('express-session');
// parse post and get data
const bodyParser = require('body-parser');

// view engine setup
app.set('views', (__dirname + '/views')); // when not using path
app.set('view engine', 'ejs');

//body parser setup
app.use(bodyParser.urlencoded({extended: true}));

// static files setup
app.use(express.static(__dirname + '/public')); // when not using path

// session setup
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

// flash setup
app.use(flash());


// setting a local instance of moment to use on the views files
app.locals.moment = require('moment');


// mongoose connection to MongoDB
mongoose.connect('mongodb://localhost/basic_mongoose');


// create a new schema
let QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Please enter a name'], minlength: [2, 'Name must be more than two characters']},
    quote: {type: String, required: [true, 'Please enter a quote'], maxlength: [150, 'Quote must be no more than 150 characters']}
}, {timestamps: true});

// create a model, give it a name and apply the schema to the model
mongoose.model('Quote', QuoteSchema);

// create a new instance of the model with characteristics of the schema
let Quote = mongoose.model('Quote');

// routes
require('./server/config/routes')(app);

app.listen(port, function () {
    console.log("listing on port: ", port)
});


