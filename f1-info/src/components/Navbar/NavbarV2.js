import React from 'react';
import logo from '../../images/f1logo.png';
import "../../App.css";
import {useLocation} from 'react-router-dom';
import AuthService from '../../services/auth.service';


const NavbarV2 = () => {

    const location = useLocation();
    const currentUser = AuthService.getCurrentUser();
    const logOut = ()=>{
        return AuthService.logout();
    }

    if(location.pathname === '/signup' || location.pathname === '/login'){
        return(
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/login">Sign In</a></li>
                </ul>
            </div>
        )
    }
    if(currentUser){
        return(
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/circuits">Circuits</a></li>
                    <li><a href='/races'>Seasons</a></li>
                    <li><a href="/drivers">Drivers</a></li>
                    <li><a href="/constructors">Constructors</a></li>
                    <li><a href="/login" onClick={logOut}>Logout</a></li>
                </ul>
            </div>
        )
    }else{
        return(
            <div className="navbar">
                <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/login">Sign In</a></li>
                </ul>
            </div>
        )
    }
}

export default NavbarV2;