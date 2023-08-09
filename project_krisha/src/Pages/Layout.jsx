import {NavLink , Outlet} from "react-router-dom";
export default function Layout(){

return<>
       <nav>
       <ul className="offset-4"> 
        <li className="nav-item ms-5">
            <NavLink to="/Home" style = {({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            "color": isActive ? "red":""}}}>Home</NavLink>
        </li>

        <li className="nav-item ms-5">
            <NavLink to="/About" style = {({isActive})=>
            {return {fontWeight: isActive ? "bold":"", 
            color: isActive ? "red":""}}}>About</NavLink>
        </li>

        <li className="nav-item ms-5">
            <NavLink to="/Contact" style={({isActive})=>
            {return {fontWeight: isActive ? "bold":"",
            color:isActive ? "red":""}}}>Contact</NavLink>
        </li>
    </ul>
       </nav>
<Outlet/>
</>
}