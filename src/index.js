import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeParse } from '@parse/react';

initializeParse(
  'http://todoapppratik.b4a.io',
  '6qPMRgiMKgg40nbYseUkOkzQ1rcySNLXlnVXvmTb',
  'gB1JCbRs4DRbfKrYEydzNcVxJOOy4Bb93257ZkP6'
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
