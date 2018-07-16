var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/', function (request, response) {
    var greeting = "Glad you are here";
    var title = "Cars and Cats... The Express Version";
    response.render('index', {greeting: greeting, title: title});
});

app.get("/cars", function (request, response) {
    var make = "Ford";
    var color = "Red";
    var title = "Car Picture";

    response.render('cars', {
        car_make: make, // the key is passed in NOT the value...
        car_color: color,
        title: title
    });

});


app.get("/cars/new", function (request, response) {
    var title = "Add a New Car";
    var heading = "Please complete this form";

    response.render('new', {
        title: title,
        heading: heading
    });

});

app.get("/cats", function (request, response) {
    var name = "Sophia";
    var breed = "Siameese";
    var title = "Car Picture";

    response.render('cats', {
        cat_name: name, // the key is passed in NOT the value...
        cat_breed: breed,
        title: title
    });

});

// app.get("/cars", function(request, response) {
//     var car_01_make = "Ford";
//     var car_01_color = "Red";
//
//     response.render('cars', {car_make: car_01_make, car_color: car_01_color} );
//
// });

app.listen(666, function () {
    console.log('hello, i am the antichrist. thanks for listing to port 666');
});
