'use strict';

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    null,
    'JSX Text 2'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
