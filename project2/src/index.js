import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );

//if you want to start measuring performance in your app , pass a function 
//to log result (for eg : reportWebVitals(console.log))
//or send to an analytics endpoint. learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

var a = 12
var b = 15
var c = "https://picsum.photos/id/13/400/300"
var d = "https://picsum.photos/id/13/400/300"

ReactDOM.render(
  <>
  <h1>
    Addition of {a} and {b} is {a+b}
  </h1>

  <div class="bd">
    <img src={c} alt="" width={400} height={300}/>
  </div>

  <div class="bd2">
    <img src = {d} alt = "" width={400} height={300}/>
  </div>

  <div class="bd3">
    <a href='https://www.youtube.com/'>YouTube</a>
  </div>
  </>,
  document.getElementById('root')
)

//Template literals
var name1 = "KRISHU";
var age = 18;
ReactDOM.render(
  <h1 className='id'>
    <u>My name is</u>:-{name1}<br></br><u>Age is</u>:-{age}
  </h1>,
  document.getElementById('root1')
)

var e = {color:'red',fontSize:'40px'}
ReactDOM.render(
  <h1 style={e}>My Name is KRISHU</h1>,
  document.getElementById('root2')
)

var time1 = 21;
var time2 = Date()
var time21 = Date()

//var time3 = time2.h1
var a4={}
var b4={}
//var a5={}

if(time1<12 && time1>=9){
  b4="Good Morning";
  a4.color='red';
}
else if(time1>=12 && time1<=16){
  b4="Good Afternoon";
  a4.color='orange';
}
else if(time1>20 && time1<=24){
  b4="Good Night";
  a4.color="darkblue";
}

ReactDOM.render(
  <h1>Hello Sir/Madam<span style={a4}>{b4},{time1},{time2},{time21}</span></h1>,
  
  document.getElementById('root2')
)