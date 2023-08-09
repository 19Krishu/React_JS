//import React from 'react';
import ReactDOM from 'react-dom';
import Std, {Name1}from './Student.jsx';
import { Arrow } from './Student1.jsx';
import { Name2 } from './Student2.jsx';
import { Person } from './Student3.jsx';
import { Img } from './Image.jsx';
import { Vid } from './Video.jsx';
import Compo from './App.js';
import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(
  <>
  <hr></hr>
  <Std/>
  <hr></hr>
  <Name1/>
  <hr></hr>
  <Arrow/>
  <hr></hr>
  <Name2/>
  <hr></hr>
  <Person/>
  <hr></hr>
  <Img/>
  <hr></hr>
  <Vid/>
  <hr></hr>
  <Compo/>
  </>,
  document.getElementById('root')
)
