var todoModel = require('../models/todoModel.js');

/**
 * todoController.js
 *
 * @description :: Server-side logic for managing todos.
 */
module.exports = {

    /**
     * todoController.list()
     */
    list: function (req, res) {
        todoModel.find(function (err, todos) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting todo.',
                    error: err
                });
            }
            return res.json(todos);
        });
    },
    
    /**
     * todoController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        todoModel.findOne({_id: id}, function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting todo.',
                    error: err
                });
            }
            if (!todo) {
                return res.status(404).json({
                    message: 'No such todo'
                });
            }
            return res.json(todo);
        });
    },
     // when inserting remember to add a comma to the end of the 'show' function 
    /**
     * todoController.create()
     */
    create: function (req, res) {
        var todo = new todoModel({
			name : req.body.name,
			completed : req.body.completed,
			note : req.body.note
        });

        todo.save(function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating todo',
                    error: err
                });
            }
            return res.status(201).json(todo);
        });
    },

    /**
     * todoController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        todoModel.findOne({_id: id}, function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting todo',
                    error: err
                });
            }
            if (!todo) {
                return res.status(404).json({
                    message: 'No such todo'
                });
            }

            todo.name = req.body.name ? req.body.name : todo.name;
			// todo.completed = req.body.completed ? req.body.completed : todo.completed;
			todo.completed = req.body.completed;
			todo.note = req.body.note ? req.body.note : todo.note;
            todo.updated_at = new Date().toISOString();
			
            todo.save(function (err, todo) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating todo.',
                        error: err
                    });
                }

                return res.json(todo);
            });
        });
    },

    /**
     * todoController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        todoModel.findByIdAndRemove(id, function (err, todo) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the todo.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
