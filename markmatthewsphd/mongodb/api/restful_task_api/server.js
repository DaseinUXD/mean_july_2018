//
const port = 6789;
//
const express = require('express');
//
const path = require('path');
//
const bodyParser = require('body-parser');
//
const flash = require('express-flash');
//
const session = require('express-session');
//
const app = express();

// view engine setup
app.set('views', path.join(__dirname, './client/views'));

app.set('view engine', 'ejs');
//
app.use(bodyParser.json());
//
app.use(express.static(path.join(__dirname, './client/static')));
//
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
// flash setup
app.use(flash());
//

// mongoose connection to MongoDB 'tasks'
require('./server/config/mongoose');

// Create a schema and apply it to a model
require('./server/models/task_model');
// Accessing routes.js

require('./server/config/routes.js')(app);

app.listen(port,  () => {
    console.log('listening on port', port)
});
//
module.exports = app;
