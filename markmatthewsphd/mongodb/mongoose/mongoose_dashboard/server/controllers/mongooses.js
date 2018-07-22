/*
*
* CONTROLLER
*
* */
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
    // READ POST
    read: function (request, response) {
        Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
            let title = "View Mongoose";
            let intro = "Mongoose";

            response.render('view', {title: title, intro: intro, mongoose: mongoose});
        });

    },
    // UPDATE GET
    update_get: function (request, response) {
        Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
            let title = 'Edit a Mongoose';
            let intro = 'Edit: ';
            response.render('edit', {title: title, intro: intro, mongoose: mongoose});
        });

    },
    // UPDATE POST
    update_post: function (request, response) {
        Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
            mongoose.name = request.body.name;
            mongoose.age = request.body.age;
            mongoose.weight = request.body.weight;
            let title = "Edit a Mongoose";
            mongoose.save(function (error) {
                if (error) {
                    console.log('we have errors', error);
                    for (var key in error.errors) {
                        request.flash('editing_mongoose', error.errors[key].message)
                    }
                    response.render('edit', {title: title, mongoose: mongoose});
                }
                else {
                    response.redirect('/');
                }
            })
        })

    },
    // DESTROY
    destroy: function (request, response) {
        Mongoose.remove({_id: request.params.id}, function (error) {
            response.redirect('/')
        })

    },

};
