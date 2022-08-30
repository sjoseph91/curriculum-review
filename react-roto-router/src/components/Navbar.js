import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
             <Link to="/">Home</Link>  
             <Link to="/about">About Us</Link>  
             <Link to="/services">Services</Link>  
        </nav>
     );
}
 
export default Navbar;