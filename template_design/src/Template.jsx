import { Component } from "react";

export default class Template extends Component{
    state = {count:0}

    Increment = () =>{
        this.setState({count:this.state.count+1})
    } 

    Decrement = () =>{
        this.setState({count:this.state.count-1})
    } 

    render(){
        return <>
        <div className="cte">
            <h1 className="cot">{this.state.count}</h1>
            <button onClick={this.Increment}>ADD</button>
            <button onClick={this.Decrement}>SUB</button>
        </div>
        </>
    }
}