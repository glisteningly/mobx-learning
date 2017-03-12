import React from 'react';
import ReactDOM from 'react-dom';
import AppState from './AppState';
import App from './App';
import './index.css';

const appState = new AppState();

ReactDOM.render(
  <App appState={appState}/>,
  document.getElementById('root')
);
