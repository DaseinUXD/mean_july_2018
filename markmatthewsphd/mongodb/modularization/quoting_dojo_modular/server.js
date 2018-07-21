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
// const mongoose = require('mongoose');
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
// mongoose.connect('mongodb://localhost/basic_mongoose');
require('./server/config/mongoose');
// create a model/schema for Quote
require('./server/models/quote');


require('./server/config/routes')(app);

app.listen(port, function () {
    console.log("listing on port: ", port)
});


