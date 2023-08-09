import { Component } from "react";

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    Increament = () => {
        this.setState({count:this.state.count+1})
    }

    Decreament = () => {
        //this.setState({count:this.state.count-1})
        if(this.state.count > 1){
            this.setState({count:this.state.count-1})
        }
    }

    render(){
        return<>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increament}>+</button>
        <button onClick={this.Decreament}>-</button>
        </>
    }
}

export {Cart};