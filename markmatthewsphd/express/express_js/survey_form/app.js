var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({
    secret: 'this is my super secret password string',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.use(bodyParser.urlencoded({extended: true}));

/* GET home page. */
app.get('/', function (request, response, next) {
    response.render('index', {title: 'Express'});
});

/* POST to submit url */
app.post('/submit', function (request, response) {
    console.log('you submitted and i recieved the post request');
    console.log(request.body); //returns a json object of key:value pairs based on the 'name' attribute
    // of the html input tag as the key.
    console.log(request.body.name);
    request.session.name = request.body.name;
    console.log(request.session.name);
    request.session.location = request.body.location;
    request.session.language = request.body.language;
    request.session.comment = request.body.comment;
    response.redirect('result');
});

/* GET results page */
app.get('/result', function (request, response) {
    console.log('rendering the results now');
    console.log(request.session.name);
    let name = request.session.name;
    let location = request.session.location;
    let language = request.session.language;
    let comment = request.session.comment;
    response.render('result', {
        title: 'Survey Results',
        name: name,
        location: location,
        language: language,
        comment: comment
    });
});


app.listen(666, function () {
    console.log('hello, i am the antichrist. thank you for listening on port 666 the styx, hell\'s best musak!');
});