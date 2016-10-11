var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'do the homework'
                },
                {
                    id: 4,
                    text: 'wash the clothes'
                }
            ]
        }
    },
    handleAddTodo: function (newTodoText) {
        alert("Text is " + newTodoText);
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;