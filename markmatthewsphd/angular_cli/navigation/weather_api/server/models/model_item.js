const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    att_01: {type: String, required: [true, 'this attribute is required']},
    img_url: {type: String},
}, {timestamps: true});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;