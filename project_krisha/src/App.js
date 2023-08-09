//Patel Krisha - 117

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

export default function App(){
  return<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}