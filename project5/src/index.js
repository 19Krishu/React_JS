import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { App1 } from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(

  <>  
  <App/>
  <hr></hr>
  <App1/>
  </>,
  document.getElementById('root'),
)

