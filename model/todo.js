const mongoose = require('mongoose');
const config = require('../config/database');

const TodoSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    }
})

const Todo = module.exports = mongoose.model('Todo', TodoSchema);

module.exports.addTodo = function(todo, callback) {
    todo.save(callback);
}