const port = 4567;
const moment = require('moment');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

/*
* *************************************************
* START mongod and mongo !!!!
*
* OPEN the terminal and type
* start start_mongo.sh
*
*
* *************************************************
*/

const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser');



// view engine setup
app.set('views', (__dirname + '/views')); // when not using path
app.set('view engine', 'ejs');
//body parser setup
app.use(bodyParser.urlencoded({extended: true}));
// static files setup
app.use(express.static(__dirname + '/public')); // when not using path
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));

app.use(flash());

app.locals.moment = require('moment');

// mongoose connection to MongoDB
mongoose.connect('mongodb://localhost/basic_mongoose');

// Create a model
let QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Please enter a name'], minlength: [2, 'Name must be more than two characters']},
    quote: {type: String, required: [true, 'Please enter a quote'], maxlength: [150, 'Quote must be no more than 150 characters']}
}, {timestamps: true});

mongoose.model('Quote', QuoteSchema);

let Quote = mongoose.model('Quote');


app.get('/', function (request, response) {
    let title = "Quoting Dojo";
    response.render('index', {title: title});
});

// app.post('/users', function (request, response) {
//     console.log('POST DATA', request.body);
//     // fill in
//     response.redirect('/');
// });

app.post('/quotes', function (request, response) {
    console.log('POST DATA', request.body);
    var quote = new Quote(request.body);
    quote.name = request.body.name;
    quote.quote = request.body.quote;

    quote.save(function (errors) {
        if (errors) {
            console.log('we have errors', errors);
            for (var key in errors.errors) {
                request.flash('adding_quote', errors.errors[key].message);
            }
            let title = "Error Page";
            response.render('error',{title: title});
        }
        else {

            response.redirect('/');
        }
    });
    console.log(quote.name, quote.quote)


    // response.redirect('/');
});

app.get('/quotes', function (request, response) {
    Quote.find({}, function (errors, quotes) {
        console.log('this is what i found: \n', quotes);
        let title = 'Quotes Page';
        response.render('quotes', {title: title, quotes: quotes});
    });

    // console.log('GET DATA', name, quote, created);


});


// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;

app.listen(port, function () {
    console.log("listing on port: ", port)
});


