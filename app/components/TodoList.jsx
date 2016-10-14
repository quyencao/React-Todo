var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;

        var renderTodo = () => {
            if(todos.length === 0) {
                return (
                  <p className="container__message">Nothing To Do</p>
                );
            }

            return todos.map((todo) => {
                return (
                    // {...todo} mean id={todo.id} text={todo.text}...
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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