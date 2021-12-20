import React, { useState, useEffect,useLayoutEffect} from "react";
import RaceResultsTable from "./RaceResultsTable";
import "../../styles/race.css";
import "../../App.css"
import axios from "axios";

const RaceResults = ({raceResults}) => {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Create a new array of object to store all data from race results request. */
    const dataResults = [
            {
                driverName:raceResults.map(driver => driver.drivers.forename.concat(" " + driver.drivers.surname)),//driversFromRace.map(driver => driver.forename.concat(" " + driver.surname)),
                number:raceResults.map(number => number.number),
                grid:raceResults.map(grid => grid.grid),
                position:raceResults.map(position => position.position),
                positionOrder:raceResults.map(positionOrder => positionOrder.positionOrder),
                points:raceResults.map(points => points.points),
                laps:raceResults.map(laps => laps.laps),
                time:raceResults.map(time => time.time),
                milliseconds:raceResults.map(milliseconds => milliseconds.milliseconds),
                fastestLap:raceResults.map(fastestLap => fastestLap.fastestLap),
                rank:raceResults.map(rank => rank.rank),
                fastestLapTime:raceResults.map(fastestLapTime => fastestLapTime.fastestLapTime),
                fastestLapSpeed:raceResults.map(fastestLapSpeed => fastestLapSpeed.fastestLapSpeed),
                status:raceResults.map(status => status.status.status),
            }
    ]

    /* Create a new array to push all data from each element (all elements of the object are arrays) of the dataResults object.
      This is for react tables, because the data needs this format:
      Array[
        {
          driverName 1:,grid 1:,etc.....
          driverName 2:,grid 2:,etc.....,
          ......
        }
      ]
    */
    const newDataResults = [];
    dataResults.forEach(dataResults => {
        dataResults.driverName.forEach((driver,i) => {
            newDataResults.push({
                driverName:driver,
                number:dataResults.number[i],
                position:dataResults.position[i],
                positionOrder:dataResults.positionOrder[i],
                grid:dataResults.grid[i],
                laps:dataResults.laps[i],
                time:dataResults.time[i],
                fastestLapTime:dataResults.fastestLapTime[i],
                fastestLapSpeed:dataResults.fastestLapSpeed[i],
                points:dataResults.points[i],
                status:dataResults.status[i],
            })
        })
    })

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    const columns = React.useMemo(
        () => [
          {
            Header: "Driver",
            accessor: "driverName"
          },
          {
            Header: "Number of Driver",
            accessor: "number",
          },
          {
            Header: "Position",
            accessor: "position",
            Cell: row => {
              return row.value === null ? "DNF" : row.value
            }
          },
          {
            Header:"Position Order",
            accessor: "positionOrder",
          },
          {
            Header:"Position in Grid",
            accessor:"grid"
          },
          {
            Header:"Laps",
            accessor:"laps"
          },
          {
            Header:"Race Time",
            accessor:"time",
            Cell: row => {
              return row.value === null ? "NO TIME" : row.value
            }
          },
          {
            Header:"Fastest Lap",
            accessor:"fastestLapTime",
            Cell: row => {
              if (row.value === null)
                return "NO TIME";
              return row.value;
            }
          },
          {
            Header:"Fastest Lap Speed",
            accessor:"fastestLapSpeed"
          },
          {
            Header:"Points",
            accessor:"points",
            Cell: row => {
              return row.value == 0 ? <span className="badge badge-danger" style={{background:"red"}}>{row.value}</span> : <span className="badge badge-success" style={{background:"green"}}>{row.value}</span>
            }
          },
          {
            Header:"Status",
            accessor:"status"
          }
        ],
        []
      );

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <h3 className="card-title">
                                <b>Results Table</b>
                            </h3>
                        </div>
                        <RaceResultsTable columns={columns} data={newDataResults} />
                    </div>
                </div>
            </div>
        </>
    )
};
export default RaceResults;