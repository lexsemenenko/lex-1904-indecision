import React from 'react';
import ReactDOM from 'react-dom';

var userName = "Lex";
var template = (
  <div className="wrapper">
    <h1>{ userName }</h1>
  </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);