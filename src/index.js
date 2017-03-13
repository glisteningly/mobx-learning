import React from 'react';
import ReactDOM from 'react-dom';
// import AppState from './AppState';
// import App from './App';
import './index.css';

import TodoStore from './TodoStore';
import TodoBox from './TodoBox'

// const appState = new AppState();

const todoStore = new TodoStore();

// ReactDOM.render(
//   <App appState={appState}/>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <TodoBox todoStore={todoStore}/>,
  document.getElementById('root')
);


