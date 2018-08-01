const items_controller = require('../controllers/controller_items'),
    path = require('path');

//routes are first checked here in express

module.exports = (app) => {
    app.get('/items', items_controller.items);
    app.get('/items/:id', items_controller.item);
    app.post('/items', items_controller.items_create);

    // if no Express routes match, go to Angular
    app.all('*', (request, response, next) => {
        response.sentFile(path.resolve('./public/dist/public/index.html'))
    });

};