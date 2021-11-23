import React from 'react';
import '../App.css';


const Dashboard = () => {

    return(
        <div className="content">
            <h1>F1 Information</h1>
            <p>Search all information of history of F1. <br />Circuits,Drivers,Constructors are available for you!</p>
            <div>
                <a type="button" href="https://www.formula1.com" className="button-dashboard" target="_blank"><span className="hover-button-dashboard"></span>Visit Official F1 WebPage</a>
            </div>
        </div>
    )
}

export default Dashboard;