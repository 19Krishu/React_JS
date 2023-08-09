import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./pages/Navigators";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

export default function App(){
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar/>}>
    <Route path="/Home"index element={<Home/>}></Route>
    <Route path="/About" index element={<About/>}></Route>
    <Route path="/Contact" index element={<Contact/>}></Route>
    <Route path="/Error" index element={<Error/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
}