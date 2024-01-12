import React from "react";
import './Navbar.css';
import logo from './assets/logo.png';

export default function Navbar(){
    return(
        <nav> 
            {/* <img src="../airbnb/public/logo512.png" className="nav--logo"/> */}
            <img src={logo} alt="Logo"/>
        </nav>

    )
}