var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;

        var renderTodo = () => {
            return todos.map((todo) => {
                return (
                    // {...todo} mean id={todo.id} text={todo.text}...
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                {renderTodo()}
            </div>
        )
    }
});

module.exports = TodoList;