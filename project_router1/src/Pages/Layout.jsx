import {NavLink , Outlet} from "react-router-dom";
import img from "../Images/GU.jpeg";
export default function Layout(){
    return<>
        <nav className="navbar navbar-expand-lg navbar-light bg nav">
<div className="container-fluid">
        <img src={img} className="ig" alt="path" height="40px" width="40px" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav rt">
        <li className="nav-item ms-3">
            <NavLink to="/Home" style = {({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            "color": isActive ? "red":""}}}>Home</NavLink>
        </li>

        <li className="nav-item ms-3">
            <NavLink to="/About" style = {({isActive})=>
            {return {fontWeight: isActive ? "bold":"", 
            color: isActive ? "red":""}}}>About</NavLink>
        </li>

        <li className="nav-item ms-3">
            <NavLink to="/Contact" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            color:isActive ? "red":""}}}>Contact</NavLink>
        </li>
    </ul>
    </div>
  </div>
</nav>
<Outlet/>
    </>
}



// import {NavLink , Outlet} from "react-router-dom";
//  import img from "../Images/GU.jpeg";
// export default function Layout(){

// return<>
        
//        <nav>
//         <src>
//             <img src={img} alt="path" height={60}></img>
//         </src>
//        <ul>
//         <li >
//             <NavLink to="/Home" style = {({isActive})=>
//             {return {fontWeight: isActive ? "bold":"",
//             "color": isActive ? "red":""}}}>Home</NavLink>
//         </li>

//         <li className="nav-item ms-3">
//             <NavLink to="/About" style = {({isActive})=>
//             {return {fontWeight: isActive ? "bold":"", 
//             color: isActive ? "red":""}}}>About</NavLink>
//         </li>

//         <li className="nav-item ms-3">
//             <NavLink to="/Contact" style={({isActive})=>
//             {return {fontWeight: isActive ? "bold":"",
//             color:isActive ? "red":""}}}>Contact</NavLink>
//         </li>
//     </ul>
//        </nav>
// <Outlet/>
// </>
// }