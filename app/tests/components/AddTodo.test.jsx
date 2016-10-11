var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    describe('handleAddTodo', () => {
        it('should call onAddTodo prop when valid new todo', () => {
            var todoText = 'Clean the house';
            var spy = expect.createSpy();
            var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
            var $el = $(ReactDOM.findDOMNode(addTodo));

            addTodo.refs.todoText.value = todoText;

            TestUtils.Simulate.submit($el.find('form')[0]);

            expect(spy).toHaveBeenCalledWith(todoText);
        });

        it('should not call onAddTodo prop when invalid new todo', () => {
            var spy = expect.createSpy();
            var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
            var $el = $(ReactDOM.findDOMNode(addTodo));

            addTodo.refs.todoText.value = '';

            TestUtils.Simulate.submit($el.find('form')[0]);

            expect(spy).toNotHaveBeenCalled();
        });
    });
});