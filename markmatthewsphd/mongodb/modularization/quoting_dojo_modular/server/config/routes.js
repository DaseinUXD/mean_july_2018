const mongoose = require('mongoose'),
    Quote = mongoose.model('Quote')
const quotes = require('../controllers/quotes');
module.exports = function (app) {
// process get request to root
    app.get('/', function (request, response) {
        quotes.index(request, response);

    });


    app.post('/quotes', function (request, response) {
        quotes.create(request, response);

    });

    app.get('/quotes', function (request, response) {
        Quote.find({}, function (errors, quotes) {
            // console.log('this is what i found: \n', quotes);
            let title = 'Quotes Page';
            response.render('quotes', {title: title, quotes: quotes});
        });

        // console.log('GET DATA', name, quote, created);


    });

}