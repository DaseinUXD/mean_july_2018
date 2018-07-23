const tasks = require('../controllers/tasks_controller.js');


module.exports = (app) => {
    /*
    *************ROOT*********
    */
    // GET root
    app.get('/', (request, response) => {
        tasks.index(request, response)
    });
    /*
    *
    **********CREATE**********
    *
    */
    // GET form to create
    app.get('/tasks/new', (request, response) => {
        //
        tasks.get_create(request, response)
    });
    // POST data to create
    app.post('/tasks', (request, response) => {
        //
        tasks.post_create(request, response)
    });
    /*
    *
    **********READ**********
    *
    */
    // GET read datum
    app.get('/tasks/:id', (request, response) => {
        //
        tasks.read_datum(request, response)
    });
    // GET read data
    app.get('/tasks', (request, response) => {
        //
        tasks.read_data(request,response)
    });
    /*
    *
    **********UPDATE**********
    *
    */
    // GET form to update
    app.get('/tasks/update/:is', (request, response) => {
        //
        tasks.get_update(request, response)
    });
    // PUT data to update
    app.put('/tasks/:id', (request, response) => {
        //
        tasks.put_update(request,response)
    });
    /*
    *
    **********DESTROY**********
    *
    */
    // DELETE datum from database
    app.delete('/tasks/:id', (request, response) => {
        //
        tasks.destroy(request, response)
    })
};