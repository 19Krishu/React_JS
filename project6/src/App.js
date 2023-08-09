import { State1 } from "./State";
import {StateChange} from "./StateChange";
import { Cart } from "./StateChange1";

function App1(){
  return <>
  <State1 class2 = 'Data Science Sec-B' />
  <hr></hr>
  <StateChange/>
  <hr></hr>
  <Cart/>
  </>
}

export {App1};