const mongoose = require('mongoose');

// create new schema
const MongooseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: [2, 'Name must be more than two characters']
    },
    age: {type: Number, required: [true, 'Please enter an age']},
    weight: {type: Number, required: [true, 'Please enter a weight']}
}, {timestamps: true});

// create a model, give it a name and appply the schema to the model
mongoose.model('Mongoose', MongooseSchema);