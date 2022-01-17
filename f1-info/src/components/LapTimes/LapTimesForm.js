import React from 'react';
import Select from 'react-select';

const LapTimesForm = ({raceResults,handleDriversChange,onSubmitDrivers}) => {

    let options = raceResults.map(driver => {
        return {key:driver.drivers.driverId,value: driver.drivers.driverId , label: driver.drivers.forename + ' ' + driver.drivers.surname };
    });

    return(
        <>
            <form onSubmit={onSubmitDrivers}>
                <Select
                    isMulti
                    name="drivers"
                    id="drivers"
                    options={options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleDriversChange}
                />
                <button type='submit' className='btn btn-danger'>Show Lap Times</button>
            </form>
        </>
    );
}

export default LapTimesForm;