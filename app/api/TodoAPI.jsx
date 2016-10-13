var $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Filter by search text
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();

            return text.length === 0 || text.indexOf(searchText) > -1;
        });

        // Filter todos with non-completed first
        filteredTodos.sort((a , b) => {
            if(!a.completed && b.completed) {
                // a before b
                return -1;
            } else if(a.completed && !b.completed) {
                // a after b
                return 1;
            } else {
                // No sort
                return 0;
            }
        });


        return filteredTodos;
    }
}