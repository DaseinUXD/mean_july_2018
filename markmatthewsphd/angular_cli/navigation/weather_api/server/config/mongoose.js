const path     = require('path'),
    fs       = require('fs'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/item_db')
// create a variable that points to the models folder
// var models_path = path.join(__dirname, '../models');
// console.log(models_path);
// // read all of the files in the models_path and require (run) each of the javascript files
//
// fs.readdir(models_path).forEach(function (file) {
//     if(file.indexOf('.js') >= 0) {
//         //require the file (this runs the model file which registers the schema
//         require(models_path + '/' + file);
//     }
// });
require('../models/model_item.js');