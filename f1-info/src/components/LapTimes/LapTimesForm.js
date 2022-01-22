import React,{useState} from 'react';
import Select from 'react-select';
import { Range } from 'rc-slider';
import "rc-slider/assets/index.css";

const LapTimesForm = ({raceResults,handleDriversChange,onSubmitDrivers,handleLapsChange,raceResultsFlag}) => {

    let optionsDrivers = raceResults.map(driver => {
        return {key:driver.drivers.driverId,value: driver.drivers.driverId , label: driver.drivers.code + ' / ' + driver.drivers.forename + ' ' + driver.drivers.surname };
    });

    const lapsFromRace = raceResults.map(laps => laps.laps);
    const realLaps = Math.max.apply(null,lapsFromRace);

    return(
        <>
            <form onSubmit={onSubmitDrivers}>
                <Select
                    isMulti
                    name="drivers"
                    id="drivers"
                    options={optionsDrivers}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleDriversChange}
                />
                {raceResultsFlag &&
                    <Range
                        min={1}
                        max={realLaps}
                        defaultValue={[1,1]}
                        onChange={handleLapsChange}
                    />
                }
                <button type='submit' className='btn btn-danger'>Show Lap Times</button>
            </form>
        </>
    );
}

export default LapTimesForm;