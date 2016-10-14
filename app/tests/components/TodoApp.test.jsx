var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var todoText = 'Test Text';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);

        // Expect createdAt is a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11,
            text: 'Test handle Toggle',
            completed: false,
            createdAt: 10,
            completedAt: undefined
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos:[todoData]});

        expect(todoApp.state.todos[0].completed).toBe(false);

        todoApp.handleToggle(11);

        expect(todoApp.state.todos[0].completed).toBe(true);

        // Expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // Test when toggle true to false, completedAt is removed
    it('should remove completedAt when toggle true to false', () => {
        var todoData = {
            id: 11,
            text: 'some Text',
            completed: true,
            createdAt: 10,
            completedAt: 30
        };

        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        expect(todoApp.state.todos[0].completed).toBe(true);
        // Toggle completed to false
        todoApp.handleToggle(11);
        expect(todoApp.state.todos[0].completed).toBe(false);

        // Expect completedAt to be undefined
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});