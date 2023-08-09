import { Component } from "react";

class Stud1 extends Component{
    col = {
        backgroundColor:"blue"
    }
    render(){
        return<>
        <h1 style={this.col}> (9) This class component</h1>
        <h1> (10) This travelled via app.js</h1>
        <h1> (11) My name is {this.props.name} , Age is {this.props.age}</h1>
        </>
    }
}
export {Stud1};