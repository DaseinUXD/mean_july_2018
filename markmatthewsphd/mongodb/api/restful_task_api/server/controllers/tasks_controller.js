/*
*
*
*************CONTROLLER*************
*
*
*
*/

const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: (request, response) => {
        console.log('i am at index');
        let title = "Restful Tasks API";
        response.render('index', {title: title})
    },
    get_create: (request, response) => {
        let title = "Add a Task";
        response.render('add', {title: title});
        // if (error) {
        //     console.log('returned error:', error);
        //     // respond with json
        //     response.json({message: 'Error', error: error})
        // }
        // else {
        //     // respond with json
        //     response.json({messages: 'success', data: tasks})
        // }

    },
    post_create: (request, response) => {
        var task = new Task(request.body);
        let title = "New Task Posted";
        console.log('this is task:', task);
        task.task_title = request.body.task_title;
        task.description = request.body.description;
        task.completed = request.body.completed;
        task.save((error) => {
            if (error) {
                console.log('there are errors', error);
                response.json({message: 'Error', error: error})
            }
            else {
                console.log('no errors');
                response.json({message: "Saved", error: error, title: title});
                console.log(task);

            }
        });

    },
    read_datum: (request, response) => {

    },
    read_data: (request, response) => {
        Task.find({}, (error, tasks) => {

            let title = 'All Tasks';
            console.log(tasks);
            if (error) {
                console.log('returned error:', error);
                // respond with json
                response.json({title: title, message: 'Error', error: error})
            }
            else {
                // respond with json
                response.json({title: title, messages: 'success', data: tasks})
            }
        })
    },
    get_update: (request, response) => {

    },
    put_update: (request, response) => {

    },
    destroy: (request, response) => {

    }
};
