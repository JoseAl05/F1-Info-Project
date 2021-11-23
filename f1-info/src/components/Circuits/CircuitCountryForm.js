import React from 'react';
import "../../App.css";



const CircuitCountryForm = ({handleChange,countries,getCiruitsByCountry,qCircuits,circuitsInfo}) => {
    return(
        <>
            <form onSubmit={getCiruitsByCountry}>
                <div className="select-countries">
                    <select className="custom-select" name="country" id="country" onChange={handleChange}>
                        {countries.map(country => (
                        <option key={country.country} value={country.country}>{country.country}</option>
                        ))}
                    </select>
                    <span className="custom-arrow"></span>
                </div>
                <button className="btn btn-danger btn-flat mt-5">Search</button>
            </form>
            <p className="mt-3">{qCircuits} Circuits</p>
            {circuitsInfo.map((circuits,index) => <p key={circuits.circuitId}>The Circuit <b>{circuits.name}</b>, located in <b>{circuits.location}</b>, <b>{circuits.country}</b>, which has a height of {circuits.alt} meters above sea level</p>)}
        </>
    )
};
export default CircuitCountryForm;