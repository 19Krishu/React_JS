import { Component } from "react";

class StateChange extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'KPP'
        }
    }

    handleClick = () => {
        this.setState = ({name:'KRISHU PARITOSH PATEL'})
    }

    render(){
        return <>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.handleClick}>Change Name</button>
        </>
    }
}

export {StateChange};