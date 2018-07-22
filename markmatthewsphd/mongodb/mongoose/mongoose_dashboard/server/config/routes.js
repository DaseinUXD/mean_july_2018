const mongooses = require('../controllers/mongooses.js');
// const mongoose = require('mongoose');
// const Mongoose = mongoose.model('Mongoose');


module.exports = function (app) {// packages this export as a function that is read by server.js
    // GET landing page
    app.get('/', function (request, response) {
        mongooses.index(request, response);

    });

    // GET CREATE form
    app.get('/mongooses/new', function (request, response) {
        mongooses.create_get(request, response);

    });

    // POST CREATE data
    app.post('/mongooses', function (request, response) {
        mongooses.create_post(request, response);

    });

    // GET READ datum
    app.get('/mongooses/:id', function (request, response) {
        mongooses.read(request, response);
    });

    // GET UPDATE form
    app.get('/mongooses/edit/:id', function (request, response) {
        mongooses.update_get(request, response);
    });
    // POST UPDATE data
    app.post('/mongooses/:id', function (request, response) {
        mongooses.update_post(request, response);
    });
    // POST DESTROY data
    app.post('/mongooses/destroy/:id', function (request, response) {
        mongooses.destroy(request, response);
    });

};