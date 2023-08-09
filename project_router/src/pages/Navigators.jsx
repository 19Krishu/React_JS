import {Outlet, NavLink} from "react-router-dom";

export default function Navbar(){
    return (<>
    {/* <ul>
        <li>
            <Link to="/">/</Link>
        </li>

        <li>
            <Link to="/home">Home</Link>
        </li>

        <li>
            <Link to="/about">About</Link>
        </li>

        <li>
            <Link to="/contact">Contact</Link>
        </li>
        
    </ul> */}
    
{/* <ul>
        <li>
            <NavLink to="/"></NavLink>
        </li>

        <li>
            <NavLink to="/Home" style = {({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            "color": isActive ? "red":""}}}>Home</NavLink>
        </li>

        <li>
            <NavLink to="/About" style = {({isActive})=>
            {return {fontWeight: isActive ? "bold":"", 
            color: isActive ? "red":""}}}>About</NavLink>
        </li>

        <li>
            <NavLink to="/Contact" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            color:isActive ? "red":""}}}>Contact</NavLink>
        </li>  
        <li>
            <NavLink to="/Error" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            color:isActive ? "red":""}}}>Error</NavLink>
        </li> 
    </ul>
    <Outlet/> */}

<nav className="navbar navbar-expand-lg navbar-light bg nav">
<div className="container-fluid">
        <img src="logo192.png" className="ig" alt="path" height="40px" width="40px" />
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

        <li className="nav-item ms-3">
            <NavLink to="/Error" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            color:isActive ? "red":""}}}>Error</NavLink>
        </li>
    </ul>
    </div>
  </div>
</nav>
<Outlet/>
    </>
)}