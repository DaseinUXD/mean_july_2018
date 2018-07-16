var express = require('express');

var app = express();
console.log('express is running');

// var bodyParser = require('body-parser');
var session = require('express-session');
// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.count = 1;

console.log('views set');

app.use(express.static(__dirname + '/public'));
console.log('static set');

app.use(session({
    secret: 'this is my secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.get('/', function (request, response){
    console.log('im now at root');
    request.session.count = app.count;
    var visits = app.count++;
    console.log(visits);
    var title = 'Counter';
    response.render('index', {title: title, counter: visits});
});

//
// module.exports = app;

app.listen(1234, function () {
    console.log('hello, i am the antichrist. try listening on port 666');
});