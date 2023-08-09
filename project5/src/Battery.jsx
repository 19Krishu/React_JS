import './index.css';

var Batper = "";
navigator.getBattery().then((bat)=>Batper=bat.level)
var BatPer = 12;
var condition = "";
var col = {}
if(BatPer < 20 && BatPer > 1)
{
    condition = BatPer + '%';
    col.color = 'red';
}

if(BatPer < 50 && BatPer > 20)
{
    condition = BatPer + '%';
    col.color = 'orange';
}

if(BatPer < 100 && BatPer >50)
{
    condition = BatPer + '%';
    col.color = 'Green';
}
function Battery()
{
    return<div className="bg">
    <h1>Your Battery is <span style={col}>{condition}</span></h1>
    <h1>Your Laptop Battery is <span style={col}>{Batper*100}%</span></h1>
    </div>
}
export {Battery};