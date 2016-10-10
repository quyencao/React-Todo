var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');

// Load App CSS
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
