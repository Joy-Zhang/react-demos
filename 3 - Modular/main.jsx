define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var Demo = require('./demo');
    ReactDOM.render(<Demo />, document.getElementById('react-app'));
});