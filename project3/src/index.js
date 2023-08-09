import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import a, { Student } from './App';
import {Name1} from './App';
import { Arrow } from './App';
import { Ana } from './App';
ReactDOM.render(
  <div className='a1'>
  <h1>I am living in {a}</h1>
  <hr></hr>
  <Name1/>
  <hr></hr>
  <Arrow/>
  <hr></hr>
  <Ana/>,
  <hr></hr>
  <Student/>
  </div>,
  document.getElementById("root")
)

