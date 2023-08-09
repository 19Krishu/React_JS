import { Component } from "react";
import Mark1 from "./Mark";

export default class Student1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            roll:120
        }
    }
    handler = () => {
        console.log('Button Click')
        this.setState({roll:this.state.roll+1})
    }
    render(){
        console.log('Student - component rendered')
        return <>
        <h1>Student Component</h1>
        <h1>This is roll : {this.state.roll}</h1>
        <Mark1 roll={this.state.roll}/>
        <button onClick={this.handler}>Change</button>
        </>
    }
}