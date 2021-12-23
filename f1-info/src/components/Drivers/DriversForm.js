import React from 'react';
import "../../App.css";
import "../../styles/driver.css";
import Select from 'react-select';
import {motion} from 'framer-motion/dist/es/index'
import { BiLoader } from "react-icons/bi";
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
    isWins,
    isPodiums,
    isScoredRace,
    isPoles,
    isTotalPoints,
    isLapsCompleted,
    isTotalRaces,
}) => {

        let options = drivers.map(driver => {
            return {key:driver.driverId,value: driver.driverId , label: driver.forename + ' ' + driver.surname };
        });
        let driverInformationComponent;
        if(isWins && isPodiums && isScoredRace && isPoles && isTotalPoints && isLapsCompleted && isTotalRaces){
            driverInformationComponent = <DriversInformation
                                            driverWins={driverWins}
                                            driverPodiums={driverPodiums}
                                            scoredRaces={scoredRaces}
                                            driverPoles={driverPoles}
                                            driverPoints={driverPoints}
                                            lapsCompleted={lapsCompleted}
                                            driverTotalRaces={driverTotalRaces}
                                            selectedDriverName={selectedDriverName}
                                            isSelecetedDriver={isSelecetedDriver}
                                         />;
        }else{
            driverInformationComponent = <motion.div
                                            initial={{
                                                x:75,
                                                scale:1.0,
                                                opacity:0.25
                                            }}
                                            animate={{
                                                x:-75,
                                                scale:0.9,
                                                opacity:0.75,
                                                rotate:360,
                                                borderRadius: [ "50% 50%", "2% 50%"]
                                            }}
                                            transition={{
                                                duration:0.5,
                                                ease:'easeInOut',
                                                flip:Infinity
                                            }}
                                            style={{
                                                height: "50px",
                                                background: "red",
                                                width: "50px",
                                                borderRadius: "2% 50%",
                                            }}
                                         >
                                         </motion.div>
        }


        return (
            <>
                <form onSubmit={onSubmitDriverInfo}>
                    <div className ="mt-5">
                        <Select options={options} onChange={handleDriverChange} name="driver" id="driver" isLoading={isLoadingDrivers}/>
                    </div>
                    <button className="btn btn-danger mt-5">See Stats</button>
                    <div className='container mt-5'>
                        {driverInformationComponent}
                    </div>
                </form>
            </>
        )
    }

export default DriversForm;