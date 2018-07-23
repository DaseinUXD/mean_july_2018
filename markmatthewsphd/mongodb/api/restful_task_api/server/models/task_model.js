const mongoose = require('mongoose');

// Create new schema

let TaskSchema = new mongoose.Schema({
    task_title: {
        type: String,
        required: [true, 'Please enter a title'],
        minlength: [2, 'The title must be more than two characters'],
        get: (task_title) => {
            try {
                return JSON.parse(task_title);
            } catch (error) {
                return task_title;
            }
        },
        set: (task_title) => {
            return JSON.stringify(task_title);
        }

        // default: ''
    },
    description: {
        type: String,
        required: [true, 'Please enter a description of the task'],
        maxlength: [300, 'The description cannot be longer than 150 characters'],
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    }

}, {timestamps: true});

// create a model, give it a name and apply the schema to the model
mongoose.model('Task', TaskSchema);
