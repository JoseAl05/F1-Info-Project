import React,{useState, useEffect} from 'react';
import { useTable,usePagination,useGlobalFilter,useAsyncDebounce,useFilters } from 'react-table';
import "../../App.css";
import "../../styles/driver.css";
import axios from "axios";
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
    isSelecetedDriver
}) => {

        let options = drivers.map(driver => {
            return {key:driver.driverId,value: driver.driverId , label: driver.forename + ' ' + driver.surname };
        });


        return (
            <form onSubmit={onSubmitDriverInfo}>
                <div className ="mt-5">
                    <Select options={options} onChange={handleDriverChange} name="driver" id="driver" isLoading={isLoadingDrivers}/>
                </div>
                <button className="btn btn-danger mt-5">Submit</button>
                <DriversInformation
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
            </form>
        )
    }

export default DriversForm;