const mongoose = require('mongoose');
const    Quote = mongoose.model('Quote');
const quotes = require('../controllers/quotes.js');

module.exports = function (app) {
// process get request to root
    app.get('/', function (request, response) {
        quotes.index(request, response);

    });

// process post request to create a new quote
    app.post('/quotes', function (request, response) {
        quotes.create(request, response );
    });

    app.get('/quotes', function (request, response) {
        quotes.read(request, response);
    });




};