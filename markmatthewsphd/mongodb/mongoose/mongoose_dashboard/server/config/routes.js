const mongooses = require('../controllers/mongooses.js');
const mongoose = require('mongoose');
const Mongoose = mongoose.model('Mongoose');


module.exports = function (app) {
    // GET landing page
    app.get('/', function (request, response) {
        mongooses.index(request, response);

    });

    // GET CREATE
    app.get('/mongooses/new', function (request, response) {
        mongooses.create_get(request, response);

    });

    // POST CREATE data
    app.post('/mongooses', function (request, response) {
        mongooses.create_post(request, response);

    });

    // GET UPDATE form
    app.get('/mongooses/edit/:id', function (request, response) {
        Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
            let title = 'Edit a Mongoose';
            let intro = 'Edit: ';
            response.render('edit', {title: title, intro: intro, mongoose: mongoose});
        });
    });

    // GET all mongooses
    app.get('/mongooses', function (request, response) {
        response.render('/mongooses')
    });
    // GET single mongoose
    app.get('/mongooses/:id', function (request, response) {
        Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
            let title = "View Mongoose";
            let intro = "Mongoose";

            response.render('view', {title: title, intro: intro, mongoose: mongoose});
        });

    });
    app.post('/mongooses/:id', function (request, response) {
        Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
            mongoose.name = request.body.name;
            mongoose.age = request.body.age;
            mongoose.weight = request.body.weight;
            let title = "Edit a Mongoose";
        })
    });

    // POST DESTROY data
    app.post('/mongooses/destroy/:id', function (request, response) {
        Mongoose.remove({_id: request.params.id}, function (error) {
            response.redirect('/')
        })
    });

// POST UPDATE data
    app.post('/mongooses/edit/:id', function (request, response) {
        mongoose.save(function (error) {
            if (error) {
                console.log('we have errors', error);
                for (var key in error.errors) {
                    request.flash('editing_mongoose', error.errors[key].message)
                }
                response.render('edit', {title: title, mongoose: mongoose});
            }
            // response.redirect('/', + mongoose)
            else {
                response.redirect('/');
            }


        })

    });
};