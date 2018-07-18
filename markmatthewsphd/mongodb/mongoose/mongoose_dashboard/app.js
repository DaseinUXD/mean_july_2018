const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const shell = require('shelljs');
// console.log(shell);
// let db = shell.cd('d:/mongodb/server/4.0/bin');
// mongod = shell.exec('start d:/mongodb/server/4.0/bin/mongod');
//
// if (mongod === true){
//     console.log('mongod running');
//     shell.exec('start d:/mongodb/server/4.0/bin/mongo');
// }
const mongoose = require('mongoose');
mongoose.connect('mongoose_dashboard_db//localhost/basic_mongoose');


// view engine setup
app.set('views', path.join(__dirname, './views'));
// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
// app.use(express.static(__dirname + '/public'));
const MongooseSchema = new mongoose.Schema({
    name: String,
    age: Number,
})
mongoose.model('Mongoose', MongooseSchema);
const Mongoose = mongoose.model('Mongoose');


app.get('/', function (request, response) {

    response.render('index', {title: 'Mongoose Dashboard'})
});
app.get('/mongooses/new', function (request, response) {
    response.render('new', {title: 'Add a Mongoose'})
});
app.get('/mongooses/edit', function (request, response) {
    response.render('edit', {title: 'Edit a Mongoose'} )
});
app.post('/mongooses', function (request, response) {
    response.redirect('/')
});

app.get('/mongooses', function (request, response) {
    response.render('/mongooses')
});

app.listen(port, function () {
    console.log('listening on port:', port)
});