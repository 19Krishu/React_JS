import {Component} from 'react';

export default class Mark extends Component{
    componentDidMount(){
        console.log('Mark - Component Mounted.......')
    }

    componentWillUnmount(){
        console.log('Mark Component Unmounted')
    }
    render(){
        console.log('Mark - Component');
        return<>
        <h1>This is Mark Component</h1>
        </>
    }
}