import React from 'react';
import {Nav,NavLink,NavMenu,NavBtn,NavBtnLink} from './Navbar';
import logo from '../../images/f1logo.png';
import '../../App.css';


const Navbar = () => {

    return(
        <Nav>
            <NavLink to="/">
                <img src={logo} alt='logo' className="img-fluid"/>
            </NavLink>
            <NavMenu>
                <NavLink to="/circuits" activeStyle>
                    Circuits
                </NavLink>
                <NavLink to="/drivers" activeStyle>
                    Drivers
                </NavLink>
                <NavLink to="/" activeStyle>
                    Constructors
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/">Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    );
}

export default Navbar;