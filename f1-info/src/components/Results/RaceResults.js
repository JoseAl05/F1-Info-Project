import React, { useState, useEffect,useLayoutEffect} from "react";
import RaceResultsTable from "./RaceResultsTable";
import QualifyTable from "../Qualify/QualifyTable";
import "../../styles/race.css";
import "../../App.css"
import axios from "axios";

const RaceResults = ({raceResults,raceResultsFlag,qualyResultsFlag,qualyResults}) => {

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

    const dataQualify = [
      {
        race:qualyResults.map(race => race.races.name),
        driver:qualyResults.map(driver => driver.drivers.forename.concat(" " + driver.drivers.surname)),
        number:qualyResults.map(number => number.number),
        position:qualyResults.map(position => position.position),
        q1:qualyResults.map(q1 => q1.q1),
        q2:qualyResults.map(q2 => q2.q2),
        q3:qualyResults.map(q3 => q3.q3)
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

    const newDataQualify = [];
    dataQualify.forEach(dataQualify => {
      dataQualify.driver.forEach((driver,i) => {
        newDataQualify.push({
          driver:driver,
          race:dataQualify.race[i],
          number:dataQualify.number[i],
          position:dataQualify.position[i],
          q1:dataQualify.q1[i],
          q2:dataQualify.q2[i],
          q3:dataQualify.q3[i],
        })
      })
    })

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    const columnsRaceResults = React.useMemo(
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

      const columnsQualify = React.useMemo(
        () => [
          {
            Header: "Driver",
            accessor: "driver"
          },
          {
            Header: "Race",
            accessor: "race",
          },
          {
            Header: "Number",
            accessor: "number",
          },
          {
            Header:"Position",
            accessor: "position",
          },
          {
            Header:"Q1 Lap",
            accessor:"q1",
            Cell: row => {
              return row.value === null ? "NO TIME" : row.value
            }
          },
          {
            Header:"Q2 Lap",
            accessor:"q2",
            Cell: row => {
              return row.value === null ? "NO TIME" : row.value
            }
          },
          {
            Header:"Q3 Lap",
            accessor:"q3",
            Cell: row => {
              return row.value === null ? "NO TIME" : row.value
            }
          },
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
                        {raceResultsFlag && <RaceResultsTable columns={columnsRaceResults} data={newDataResults} />}
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">
                            <h3 className="card-title">
                                <b>Qualify Table</b>
                            </h3>
                        </div>
                        {qualyResultsFlag && <QualifyTable columns={columnsQualify} data={newDataQualify}/>}
                    </div>
                </div>
            </div>
        </>
    )
};
export default RaceResults;