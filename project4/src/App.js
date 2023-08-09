import {Compo} from "./Component";
import { Stud1 } from "./Component1";
import { Arr1 } from "./Component2";

//<h1 style:"properties:values">This is your elements</h1>
function App(){
  return <>
  <Compo/>
  <hr></hr>
  <Stud1 name="Riaan" age="1"/>
  <hr></hr>
  <Arr1 name="Krishu" age="19"/>
  </>
}
export default App;