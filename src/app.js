import React from 'react';
import ReactDOM from 'react-dom';

const userName = 'Lex';
const template = (
  <div className="wrapper">
    <h1>{userName}</h1>
  </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
