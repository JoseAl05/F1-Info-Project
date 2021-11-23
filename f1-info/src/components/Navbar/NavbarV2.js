import React from 'react';
import logo from '../../images/f1logo.png';
import '../../App.css';


const NavbarV2 = () => {

    return(
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/circuits">Circuits</a></li>
                    <li><a href="#">Drivers</a></li>
                    <li><a href="#">Constructors</a></li>
                </ul>
        </div>
    );
}

export default NavbarV2;