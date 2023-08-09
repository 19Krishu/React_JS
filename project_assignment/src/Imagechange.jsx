import img1 from './Image/IMG_0888 (2).jpg'
import img2 from './Image/IMG_20230204_201406_244_2.jpg'
import img3 from './Image/IMG-20221223-WA0046.jpg'
import { Component } from "react";
var a=img1
var b=img2
var c=img3

export default class Image extends Component{
    constructor(props){
        super(props)
        this.state={
            imageindex:0,
            image:[a,b,c]
        }
    }
    imagech1=()=>{
        const {imageindex}=this.state;
        if(this.state.imageindex>0){
        this.setState({imageindex:imageindex-1})
        }

    }
    imagech2=()=>{
        const {image,imageindex}=this.state;
        if(this.state.imageindex<image.length-1){
        this.setState({imageindex:imageindex+1})
        }
    
        
    }
    render(){
        const {image,imageindex}=this.state;
        return<>
         <img src={image[imageindex]} alt="path" height="200px" width="200px"></img><br></br><br></br>
         <button onClick={this.imagech1}>previous</button><nbsp> </nbsp>
         <button onClick={this.imagech2}>next</button>
        </>
    }
}
export {Image};