import React from 'react';
import { AtomLoader } from "react-loaders-kit";
import "../../App.css";
import "../../styles/driver.css";
import Select from 'react-select';
import DriversInformation from './DriversInformation';

const DriversForm = ({
    driverWins,
    drivers,
    scoredRaces,
    driverPoles,
    driverPoints,
    lapsCompleted,
    driverTotalRaces,
    handleDriverChange,
    selectedDriverName,
    driverPodiums,
    onSubmitDriverInfo,
    isLoadingDrivers,
    isSelecetedDriver,
    isDriverInfo,
    isSubmitted,
}) => {

        const loaderProps = {
            loading: true,
            size: 200,
            duration: 2,
            colors: ["red", "black"],
        };

        let options = drivers.map(driver => {
            return {key:driver.driverId,value: driver.driverId , label: driver.forename + ' ' + driver.surname };
        });

        return (
            <>
                <form onSubmit={onSubmitDriverInfo}>
                    <div className ="mt-5">
                        <Select options={options} onChange={handleDriverChange} name="driver" id="driver" isLoading={isLoadingDrivers}/>
                    </div>
                    <button className="btn btn-danger mt-5">See Stats</button>
                    <div className='container mt-5'>
                    {!isSubmitted ? <div></div> : <AtomLoader {...loaderProps}/>}
                    {isDriverInfo && <DriversInformation
                                        driverWins={driverWins}
                                        driverPodiums={driverPodiums}
                                        scoredRaces={scoredRaces}
                                        driverPoles={driverPoles}
                                        driverPoints={driverPoints}
                                        lapsCompleted={lapsCompleted}
                                        driverTotalRaces={driverTotalRaces}
                                        selectedDriverName={selectedDriverName}
                                        isSelecetedDriver={isSelecetedDriver}
                                    />
                    }
                    </div>
                </form>
            </>
        )
    }

export default DriversForm;