import { Component } from "react";

class State1 extends Component{
    state = {
        name: 'Krishu',
        age: 18,
        class1:this.props.class2
    }
    render(){
        return <>
        <hr></hr>
        <h1>My name is {this.state.name}</h1>
        <hr></hr>
        <h1>My age is {this.state.age}</h1>
        <hr></hr>
        <h1>I am studying in {this.state.class1}</h1>
        </>
    }
}

export {State1};