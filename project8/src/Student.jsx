import { Component } from "react";
import Mark1 from "./Mark";

export default class Student extends Component{
    render(){
        console.log('Student - Component render [child of app]')
        return<>
        <Mark1/>
        <h1>This is a Student Component</h1>
        <h1>{this.props.name}</h1>
        </>
    }
}