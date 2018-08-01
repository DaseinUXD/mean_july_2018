var Item = require('../models/model_item');

module.exports = {
    
    items: function(request, response){
        
        Item.find({}, (err, products) => {
            if (err) {
                response.json({'message': 'error', 'errors': ['Couldnt Product.find()']});
            }
            else {
                response.json({'message': 'success', 'data': products});
            }
        });
    },
    
    item: function(request, response){
        id = request.params.id;
        Item.findById(id, (err, product) => {
            if (err) {
                response.json({'err': 'Ooooopsies'});
            }
            else {
                response.json(product);
            }
        });
    },
    
    items_create: (request, response) => {
        item = new Item();
        // request.body contains the products passed in from createProducts in http.service.ts
        item.name = request.body.name;
        item.price = request.body.price;
        t.info = request.body.info;
        t.image_url = request.body.url;
        t.save((err) => {
            if (err) {
                response.json({'error': err});
            }
            else {
                response.json({'success': 'success saving'});
            }
        });
    }
    
};