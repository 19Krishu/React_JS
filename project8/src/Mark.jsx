import { Component } from "react";
import Subject1 from "./Subject";
//import App from "./App";

export default class Mark1 extends Component{
    render(){
        console.log('Mark - Component render [Child of student]');
        return<>
        <h1>App1</h1>
        <Subject1/>
        {/* <App/> */}
        </>
    }
}