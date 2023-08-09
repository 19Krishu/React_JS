import Img1 from './Images/_MG_1770.JPG';

var a = Img1;
function Img(){
    return <>
    <img src={a} alt="path" width={400} height={600}/>
    </>
}
export {Img};