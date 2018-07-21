// Require mongoose
var mongoose = require("mongoose");

// Create new schemas for
// CRUD animals into/from database
var AnimalSchema = new mongoose.Schema({
    name: String,
    updated_at: {type: Date, default: Date.now}
});

// Schema for adding animals into database
var AddAnimalSchema = new mongoose.Schema({
    name: String,
    updated_at: {type: Date, default: Date.now}
});

// Schema for updating a single animal
var UpdateAnimalSchema = new mongoose.Schema({
    name: String,
    updated_at: {type: Date, default: Date.now}
});

// Connect my collection and model schemas
mongoose.model("Animal", AnimalSchema);
mongoose.model("AddAnimal", AddAnimalSchema);
mongoose.model("UpdateAnimal", UpdateAnimalSchema);



