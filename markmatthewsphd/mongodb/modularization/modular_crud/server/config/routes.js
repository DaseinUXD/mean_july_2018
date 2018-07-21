// Show export to "animalsController" controller
var showanimals = require("../controllers/showanimals.js");

// Pass routes from this file to server.js
module.exports = function(app) {

    // Home page
    app.get("/", function(req, res) {
        showanimals.show(req, res);
    });

    // Form page to add new animals
    // to MongoDB collection
    app.get("/mongooses/new", function(req, res){
        showanimals.newanimalform(req, res);
    });

    // Show a single animal
    app.get("/mongooses/:id", function(req, res) {
        showanimals.showSingleAnimal(req, res);

    });

    // Update a single animal
    app.get("/mongooses/:id/edit", function(req, res) {
        showanimals.updateSingleAnimal(req, res);
    });

    // Route to add an animal to DB
    app.post("/mongooses", function(req, res) {
        showanimals.addanimal(req, res);
    });


    // Route to update a single
    // animal document
    app.post("/mongooses/:id", function(req, res) {
        showanimals.executeUpdateAnimal(req, res);
    });

// Route to delete a single
// animal document
    app.get("/mongooses/:id/destroy", function(req, res) {

        showanimals.deleteAnimal(req, res);

    });

}