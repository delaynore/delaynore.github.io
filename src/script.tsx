import React from 'react';
import './common.css';
import { App } from './Components/App/App';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
