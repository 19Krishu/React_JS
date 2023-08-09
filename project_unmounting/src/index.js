import React, { Component } from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import './index.css';
//import App from './App';
import Student from './Student';
import Mark from './Mark';

ReactDOM.render(
  <>
  <Student/>
  </>,
  document.getElementById('root')
)

ReactDOM.render(
  <>
  <Mark/>
  </>,
  document.getElementById('root1')
)

ReactDOM.unmountComponentAtNode(document.getElementById('root1'));