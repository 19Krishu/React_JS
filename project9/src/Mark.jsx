import { Component } from "react";

export default class Mark1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            mroll:this.props.roll
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log('Mark - get derived state run..')
        console.log(props,state)
        if (props.roll !== state.mroll){
            return state.mroll
        }
        return null;
    }
    render(){
        console.log('Mark - Component rendered [Child of Student]')
        return <>
        <h1>{this.state.mroll}</h1>
        </>
    }
}