import React from 'react';
import ReactDOM from 'react-dom';

const app = {
  options: []
};

const onFromSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randowmNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randowmNum];
  console.log(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div className="wrapper">
      <h1>Indecision App</h1>
      <p>
        {app.options.length > 0
          ? 'Here are your options'
          : 'You have no options'}
      </p>
      <button
        disabled={app.options.length === 0}
        onClick={onMakeDecision}
        type="button"
      >
        What should I do?
      </button>
      <button onClick={onRemoveAll} type="button">
        Remove All
      </button>
      <ul>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ul>
      <form onSubmit={onFromSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
class Header extends React.Component {}
