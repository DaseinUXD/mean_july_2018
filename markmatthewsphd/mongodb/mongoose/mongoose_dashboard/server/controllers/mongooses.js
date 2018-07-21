const mongoose = require('mongoose');
const Mongoose = mongoose.model('Mongoose');

module.exports = {
    // GET root/index
    index: function (request, response) {
        Mongoose.find({}, function (error, mongooses) {
            let title = "Modular Mongoose Dashboard";
            response.render('index', {title: title, mongooses: mongooses});
        })

    },
    // CREATE GET
    create_get: function (request, response) {
        response.render('new', {title: 'Add a Mongoose'})
    },
    // CREATE POST
    create_post: function (request, response) {
        var mongoose = new Mongoose(request.body);
        mongoose.name = request.body.name;
        mongoose.age = request.body.age;
        mongoose.weight = request.body.weight;
        mongoose.save(function (error) {
            if (error) {
                console.log('we have errors', error);
                for (var key in error.errors) {
                    request.flash('adding_mongoose', error.errors[key].message)
                }
                let title = "Mongoose Dashboard Errors";
                response.render('error', {title: title, mongoose: mongoose});
            }
            else {
                response.redirect('/');
            }

        });
    },
    // READ
    read: function (request, response) {

    },
    // UPDATE GET
    update_get: function (request, response) {

    },
    // UPDATE POST
    update_post: function (request, response) {

    },
    // DESTROY
    destroy: function (request, response) {

    },
    temp: function (request, response) {

    },
    temp1: function (request, response) {

    },
}
