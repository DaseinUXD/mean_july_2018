const port = 3000;
const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const shell = require('shelljs');
const flash = require('express-flash');
const session = require('express-session');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

// Session Setup
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}

}));

// Flash Setup
app.use(flash());

// Views Engine
app.set('views', path.join(__dirname, './views'));
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// Parser
app.use(bodyParser.urlencoded({extended: true}));
// Static Files
app.use(express.static(path.join(__dirname, './public')));
// app.use(express.static(__dirname + '/public'));

// Create a schema
const MongooseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: [2, 'Name must be more than two characters']
    },
    age: {type: Number, required: [true, 'Please enter an age']},
    weight: {type: Number, required: [true, 'Please enter a weight']}
}, {timestamps: true});

// Create a model based on schema
mongoose.model('Mongoose', MongooseSchema);

// Create an object based on the model
const Mongoose = mongoose.model('Mongoose');


app.get('/', function (request, response) {
    Mongoose.find({}, function (error, mongooses) {
        let title = "Mongoose Dashboard";
        response.render('index', {title: title, mongooses: mongooses});
    })

});
app.get('/mongooses/new', function (request, response) {

    response.render('new', {title: 'Add a Mongoose'})
});

app.get('/mongooses/edit/:id', function (request, response) {
    Mongoose.findOne({_id: request.params.id}, function(error, mongoose) {
        let title = 'Edit a Mongoose';
        let intro = 'Edit: ';
        response.render('edit', {title: title, intro: intro, mongoose: mongoose});
    });
});

app.get('/mongooses', function (request, response) {
    response.render('/mongooses')
});
app.get('/mongooses/:id', function (request, response) {
    Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
        let title = "View Mongoose";
        let intro = "Mongoose";

        response.render('view', {title: title, intro: intro, mongoose: mongoose});
    });

});
// Update Post
app.post('/mongooses/:id', function(request, response){
    Mongoose.findOne({_id: request.params.id}, function (error, mongoose) {
        mongoose.name = request.body.name;
        mongoose.age = request.body.age;
        mongoose.weight = request.body.weight;
        let title= "Edit a Mongoose"
        mongoose.save(function(error){
            if (error) {
                console.log('we have errors', error);
                for (var key in error.errors) {
                    request.flash('editing_mongoose', error.errors[key].message)
                }
                response.render('edit', {title:title,  mongoose: mongoose});
            }
            else {
                response.redirect('/');
            }


        })
        // response.redirect('/', + mongoose)
    })
})

app.post('/mongooses', function (request, response) {
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
    // response.redirect('/');
    // console.log(mongoose.id, mongoose.age, mongoose.weight);
});

app.post('/mongooses/destroy/:id', function (request, response) {
    Mongoose.remove({_id: request.params.id}, function (error) {
        response.redirect('/')
    })
});

app.listen(port, function () {
    console.log('listening on port:', port)
});