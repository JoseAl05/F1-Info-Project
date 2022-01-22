import React, { useState } from "react";
import RaceResultsTable from "./RaceResultsTable";
import QualifyTable from "../Qualify/QualifyTable";
import DriverStandingTable from "../DriverStandings/DriverStandingsTable";
import LapTimesTable from "../LapTimes/LapTimesTable";
import LapTimesForm from "../LapTimes/LapTimesForm";
import "../../styles/race.css";
import "../../App.css";
import {Grid,AutoSizer} from 'react-virtualized';
import 'react-virtualized/styles.css';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import { Bar,Line } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

const RaceResults = ({raceResults,raceResultsFlag,qualyResultsFlag,qualyResults,driverStandingsFlag,driverStandings,lapTimes,lapTimesFlag,handleDriversChange,onSubmitDrivers,handleLapsChange,data}) => {

  ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
  );

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /* Create a new array of object to store all data from race results request. */
    const dataResults = [
            {
                driverName:raceResults.map(driver => driver.drivers.forename.concat(" " + driver.drivers.surname)),//driversFromRace.map(driver => driver.forename.concat(" " + driver.surname)),
                constructor:raceResults.map(constructor => constructor.constructors.name),
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

    const dataDriverStandings = [
      {
        race:driverStandings.map(race => race.races.name),
        driver:driverStandings.map(driver => driver.drivers.forename.concat(" " + driver.drivers.surname)),
        points:driverStandings.map(points => points.points),
        position:driverStandings.map(position => position.position),
        positionText:driverStandings.map(positionText => positionText.positionText),
        wins:driverStandings.map(wins => wins.wins)
      }
    ]

    const dataLapTimes = [
      {
        driver:lapTimes.map(driver => driver.drivers.code/*driver.drivers.forename.concat(" " + driver.drivers.surname)*/),
        lap:lapTimes.map(lap => lap.lap),
        position:lapTimes.map(position => position.position),
        time:lapTimes.map(time => time.time),
        milliseconds:lapTimes.map(milliseconds => milliseconds.milliseconds),
      }
    ]

    /* Create a new array to push all data from each element (all elements of the object are arrays) of the dataResults object.
      This is for react tables, because the data needs this format:
      Array[
        {
          driverName 1: "Lewis Hamilton" ,grid 1: 1,etc.....
          driverName 2: "Max Verstappen" ,grid 2: 2,etc.....,
          ......
        }
      ]
    */
    const newDataResults = [];
    dataResults.forEach(dataResults => {
        dataResults.driverName.forEach((driver,i) => {
            newDataResults.push({
                driverName:driver,
                constructor:dataResults.constructor[i],
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

    const newDataDriverStandings = [];
    dataDriverStandings.forEach(dataDriverStandings => {
      dataDriverStandings.driver.forEach((driver,i) => {
        newDataDriverStandings.push({
          driver:driver,
          race:dataDriverStandings.race[i],
          points:dataDriverStandings.points[i],
          position:dataDriverStandings.position[i],
          wins:dataDriverStandings.wins[i]
        })
      })
    })

    const newDataLapTimes = [];
    dataLapTimes.forEach(dataLapTimes => {
      dataLapTimes.driver.forEach((driver,i) => {
        newDataLapTimes.push({
          Driver:driver,
          Lap:dataLapTimes.lap[i],
          Position:dataLapTimes.position[i],
          Time:dataLapTimes.time[i],
          // milliseconds:dataLapTimes.milliseconds[i],
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
          Header:"Team",
          accessor:"constructor"
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
            return row.value === 0 ? <span className="badge badge-danger" style={{background:"red"}}>{row.value}</span> : <span className="badge badge-success" style={{background:"green"}}>{row.value}</span>
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

    const columnsDriverStandings = React.useMemo(
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
          Header: "Position",
          accessor: "position",
        },
        {
          Header:'Points in this Season',
          accessor:'points',
        },
        {
          Header:"Wins in this Season",
          accessor: "wins",
        },
      ],
      []
    );

    const columnsLapTimes = React.useMemo(
      () => [
        {
          Header: "Driver",
          accessor: "driver"
        },
        {
          Header: "Lap",
          accessor: "lap",
        },
        {
          Header: "Position",
          accessor: "position",
        },
        {
          Header:'Lap Time',
          accessor:'time',
        },
      ],
      []
    );


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Race History by Lap and Driver',
      },
    },
    scales: {
      x:{
        position: 'bottom',
        ticks: {
          font:{
            size:8,
          },
          maxTicksLimit: 350,
        }
      },
      y:{
        display:true,
        type:'linear',
        position:'left',
        ticks:{
          maxTicksLimit: 10
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y1:{
        display:true,
        position:'right',
      },
    }
  };

  let driverNames = [];
  let headersForGrid = [];
  let timeLineRace = [];
  let filteredArray = [];
  console.log(newDataLapTimes);
  // At the start of this logic, our data looks like this.
  //
  //
  //   [
  //     {
  //         "Driver": "HAM",
  //         "Lap": 1,
  //         "Position": 15,
  //         "Time": "1:59.979"
  //     },
  //     {
  //         "Driver": "HAM",
  //         "Lap": 2,
  //         "Position": 15,
  //         "Time": "2:24.326"
  //     },
  //     {
  //         "Driver": "HAM",
  //         "Lap": 3,
  //         "Position": 14,
  //         "Time": "2:18.709"
  //     },
  //     {
  //         "Driver": "ROS",
  //         "Lap": 1,
  //         "Position": 7,
  //         "Time": "1:51.701"
  //     },
  //     {
  //         "Driver": "ROS",
  //         "Lap": 2,
  //         "Position": 7,
  //         "Time": "2:25.721"
  //     },
  //     {
  //         "Driver": "ROS",
  //         "Lap": 3,
  //         "Position": 7,
  //         "Time": "2:17.745"
  //     }
  // ]
  //
  // This format is not what we need.
  //
  // newDataLapTimes has the name of the driver repeated as many times as number of laps,
  // for example, if the user selected 5 laps, the name of the driver will be repeated up to 5 times
  // so I needed to get only unique values of the names.

  const uniqueDriverNames = new Set(newDataLapTimes.map(d => d.Driver));

  //Then pushed the unique values to a new Array

  driverNames.push(Array.from(uniqueDriverNames.values()));
  console.log(driverNames);
  // This is the output
  //
  // [
  //   [
  //       "HAM",
  //       "ROS"
  //   ]
  // ]
  //
  // When the request of lap times,position and number of laps and the driver whose you want to know info about is ready
  // (lapTimesFlag === true), the loop starts.

  if(lapTimesFlag){

    // First loop into driver names array

    for(let x = 0 ; x<driverNames[0].length ; x++){

      // Push the first name into the final array that we are going to use to display data.
      // Also need to filter the driver names array to get the driver we need.

      timeLineRace.push(driverNames[0].filter((data,index) => index === x));

      //After that, loop into newDataLapTimes, that is our variable filled with data by the request.

      for(let i = 0 ; i<newDataLapTimes.length ; i++){

        //We ask if the names matches.

        if(driverNames[0][x] === newDataLapTimes[i].Driver){

          // If matches we push only the info that we need. We descart the name, that's why the filter.

          timeLineRace.push(Object.values(newDataLapTimes[i]).filter((data,index) => index != 0));
        }

        // If does not match, we continue the loop.

        if(driverNames[0][x] != newDataLapTimes[i].Driver){
          continue;
        }
      }
    }
    console.log(timeLineRace);

    // When the loops are finished, we need to filter our final array, to get only the arrays that have the race information.

    let filteredArray = timeLineRace.filter(arrays => arrays.length === 3);

    // Finally we push an empty space at beginning of those arrays.

    filteredArray.map(arrays => arrays.unshift(' '));
    headersForGrid = Object.keys(newDataLapTimes[0]);
  }

  const cellRendererGridBody = ({columnIndex,key,rowIndex,style}) =>{
    return(
      <div key={key} style={style}>
        {timeLineRace[rowIndex][columnIndex]}
      </div>
    );
  }

  const cellRendererGridHeader = ({columnIndex,key,rowIndex,style}) =>{
    return(
      <div key={key} style={style}>
        {headersForGrid[columnIndex]}
      </div>
    );
  }
  const TOP_COLOR_FROM = 'red';

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
                  <div className="card-body">
                    <div className="card-header">
                      <h3 className="card-title">
                          <b>Qualify Table</b>
                      </h3>
                    </div>
                    {qualyResultsFlag && <QualifyTable columns={columnsQualify} data={newDataQualify}/>}
                  </div>
                <div className="card-body">
                    <div className="card-header">
                      <h3 className="card-title">
                          <b>Driver Standings Table at this point of the season.</b>
                      </h3>
                  </div>
                  {driverStandingsFlag && <DriverStandingTable columns={columnsDriverStandings} data={newDataDriverStandings}/>}
              </div>
              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title">
                    <b>Lap Times of the race.</b>
                  </h3>
                </div>
                {lapTimesFlag &&
                  <div
                    className="mt-5"
                    style={{
                      fontWeight:"bolder",
                      alignContent:"center",
                      height:"3rem",
                      display:"flex",
                      paddingLeft:"250px",
                  }}>
                    <AutoSizer>
                      {({height, width}) => (
                        <Grid
                          cellRenderer={cellRendererGridHeader}
                          columnCount={headersForGrid.length}
                          columnWidth={200}
                          height={height}
                          rowCount={1}
                          rowHeight={30}
                          width={width}
                        />
                      )}
                    </AutoSizer>
                  </div>
                }
                {lapTimesFlag &&
                  <div
                    className="mt-5"
                    style={{
                      fontWeight:"bolder",
                      alignContent:"center",
                      height:"30rem",
                      paddingLeft:"250px",
                    }}>
                    <AutoSizer>
                    {({height, width}) => (
                      <Grid
                        cellRenderer={cellRendererGridBody}
                        columnCount={timeLineRace[1].length + 1}
                        columnWidth={200}
                        height={height}
                        rowCount={timeLineRace.length}
                        rowHeight={30}
                        width={width}
                      />
                    )}
                  </AutoSizer>
                </div>
                }
              </div>
              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title">
                    <b>Lap Times of the race.</b>
                  </h3>
                </div>
                <LapTimesForm raceResults={raceResults} handleDriversChange = {handleDriversChange} onSubmitDrivers={onSubmitDrivers} handleLapsChange={handleLapsChange} raceResultsFlag={raceResultsFlag}/>
                  {lapTimesFlag && <Line options={options} data={data}/>}
              </div>
            </div>
        </div>
      </>
  )
};
export default RaceResults;