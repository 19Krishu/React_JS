//import React from 'react';
import React, {componemt, Component} from "react";

var a = 'Gujarat';
export default a;

//Component using simple javaScript function
function Name1(){
  return <>
  <h1>We have created function bases component in app.js</h1>
  <h2>Yes , this function is based</h2>
  </>
}

//Component using arrow function
const Arrow = () => {
  return <>
  <h1>I came from arrow function</h1>
  <h3>We are the part of arrow function</h3>
  </>
}

//Component using Ananomouse function
var Ana = function(){
  return <>
  <h2>I am the part of Ananomouse function</h2>
  </>
}

class Student extends Component{
  render(){
    return <>
    <h1 style={col1}>This is my class base component</h1>
    </>
  }
}

var col1 = {color:"cyan" , background:"purple"}

export {Name1};
export {Arrow};
export {Ana};
export {Student};