import React from 'react';
import logo from '../../images/f1logo.png';
import "../../App.css";
import {useLocation,Link} from 'react-router-dom';
import AuthService from '../../services/auth.service';


const NavbarV2 = () => {

    const location = useLocation();
    const currentUser = AuthService.getCurrentUser();
    const logOut = ()=>{
        return AuthService.logout();
    }

    if(location.pathname === '/signup' || location.pathname === '/login'){
        return(
            <section>
                <div className="navbar">
                    <img src={logo} alt="logo" className="logo" />
                    <ul className="navbar-menu">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/signup"}>Sign Up</Link></li>
                        <li><Link to={"/login"}>Sign In</Link></li>
                    </ul>
                </div>
            </section>
        )
    }
    if(currentUser){
        return(
            <section>
                <div className="navbar">
                    <img src={logo} alt="logo" className="logo" />
                    <ul className="navbar-menu">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/circuits"}>Circuits</Link></li>
                        <li><Link to={"/races"}>Seasons</Link></li>
                        <li><Link to={"/drivers"}>Drivers</Link></li>
                        <li><Link to={"/constructors"}>Constructors</Link></li>
                        <li><Link to={"/login"} onClick={logOut}>Logout</Link></li>
                    </ul>
                </div>
            </section>
        )
    }else{
        return(
            <section>
                <div className="navbar">
                    <img src={logo} alt="logo" className="logo" />
                    <ul className="navbar-menu">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/signup"}>Sign Up</Link></li>
                        <li><Link to={"/login"}>Sign In</Link></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default NavbarV2;