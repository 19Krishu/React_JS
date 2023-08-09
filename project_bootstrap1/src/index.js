import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Responsive } from './ResImages';

ReactDOM.render(
  <>
  <Bootstrap/>
  <Responsive/>
  </>,
  document.getElementById('root')
)
