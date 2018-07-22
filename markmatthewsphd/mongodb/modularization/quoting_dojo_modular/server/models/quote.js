const mongoose = require('mongoose');
// create a new schema
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Please enter a name'], minlength: [2, 'Name must be more than two characters']},
    quote: {type: String, required: [true, 'Please enter a quote'], maxlength: [150, 'Quote must be no more than 150 characters']}
}, {timestamps: true});

// create a model, give it a name and apply the schema to the model
mongoose.model('Quote', QuoteSchema);
