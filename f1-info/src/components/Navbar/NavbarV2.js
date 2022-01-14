import React from 'react';
import logo from '../../images/f1logo.png';
import "../../App.css";
import {useLocation} from 'react-router-dom';


const NavbarV2 = () => {

    const location = useLocation();
    console.log(location);

    if(location.pathname === '/signup' || location.pathname === '/login'){
        return(
            <><h1>a</h1></>
        )
    }else{
        return(
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/circuits">Circuits</a></li>
                        <li><a href='/races'>Seasons</a></li>
                        <li><a href="/drivers">Drivers</a></li>
                        <li><a href="/constructors">Constructors</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/login">Sign In</a></li>
                    </ul>
            </div>
        );
    }
}

export default NavbarV2;