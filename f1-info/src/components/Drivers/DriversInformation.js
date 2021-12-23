import React from 'react';
import "../../App.css";
import "../../styles/driver.css";

const DriversInformation = ({driverWins,driverPodiums,scoredRaces,driverPoles,driverPoints,lapsCompleted,driverTotalRaces,selectedDriverName,isSelecetedDriver}) => {

    return (
        <div className="driver-info">
            {
                /* isSelecetedDriver &&*/
                <h3 className="driver-name">{selectedDriverName.driverName}</h3>
            }
            {
                /* isSelecetedDriver &&*/ driverWins == 0 && driverPodiums == 0 && driverPoles == 0 &&
                <ul>
                    <li>Has no victories in F1.</li>
                    <li>Has no podiums in F1.</li>
                    <li>Has no poles in F1.</li>
                    <li>Has completed {driverTotalRaces} races.</li>
                    <li>Has scored in {scoredRaces} races.</li>
                    <li>Has completed {lapsCompleted[0].totalLaps} laps.</li>
                    <li>Has {driverPoints[0].totalPoints} points scored in his career.</li>
                </ul>
            }
            {
                /* isSelecetedDriver &&*/ driverPodiums > 0 && driverWins > 0 && driverPoles > 0 &&
                <ul>
                    <li>Has {driverWins} victories in F1.</li>
                    <li>Has {driverPodiums} podiums in F1.</li>
                    <li>Has {driverPoles} poles in F1.</li>
                    <li>Has completed {driverTotalRaces} races.</li>
                    <li>Has scored in {scoredRaces} races.</li>
                    <li>Has completed {lapsCompleted[0].totalLaps} laps.</li>
                    <li>Has {driverPoints[0].totalPoints} points scored in his career.</li>
                </ul>
            }
            {
                /* isSelecetedDriver &&*/ driverWins == 0 && driverPodiums > 0 && driverPoles > 0 &&
                <ul>
                    <li>Has no victories in F1.</li>
                    <li>Has {driverPodiums} podiums in F1.</li>
                    <li>Has {driverPoles} poles in F1.</li>
                    <li>Has completed {driverTotalRaces} races.</li>
                    <li>Has scored in {scoredRaces} races.</li>
                    <li>Has completed {lapsCompleted[0].totalLaps} laps.</li>
                    <li>Has {driverPoints[0].totalPoints} points scored in his career.</li>
                </ul>
            }
            {
                /* isSelecetedDriver &&*/ driverWins == 0 && driverPodiums > 0 && driverPoles == 0 &&
                <ul>
                    <li>Has no victories in F1.</li>
                    <li>Has {driverPodiums} podiums in F1.</li>
                    <li>Has no poles in F1.</li>
                    <li>Has completed {driverTotalRaces} races.</li>
                    <li>Has scored in {scoredRaces} races.</li>
                    <li>Has completed {lapsCompleted[0].totalLaps} laps.</li>
                    <li>Has {driverPoints[0].totalPoints} points scored in his career.</li>
                </ul>
            }
            {
                /* isSelecetedDriver &&*/ driverWins > 0 && driverPodiums > 0 && driverPoles == 0 &&
                <ul>
                    <li>Has {driverWins} victories in F1</li>
                    <li>Has {driverPodiums} podiums in F1</li>
                    <li>Has no poles in F1.</li>
                    <li>Has completed {driverTotalRaces} races.</li>
                    <li>Has scored in {scoredRaces} races.</li>
                    <li>Has completed {lapsCompleted[0].totalLaps} laps.</li>
                    <li>Has {driverPoints[0].totalPoints} points scored in his career.</li>
                </ul>
            }
        </div>
    )
}

export default DriversInformation;