import { Component } from "react";
import Student from "./Student";

export default class App1 extends Component{
  constructor(props){
    super(props)
    this.state = {
      class1:"data sem4",
      class2:"I Love You"
    }
    console.log("Constructor called first")
  }

  static getDerivedStateFromProps(props,state){
    console.log('This is Derived Method')
    console.log(props,state)
    return null;
  }

  componentDidMount(){
    console.log('Component Successfully routes here')
  }
  render(){
    console.log("App1 - rendered")
    return<>
    <Student/>
    <h1>This is App1 Component</h1>
    </>
  }
}