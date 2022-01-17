import React from "react";
import RaceResultsTable from "./RaceResultsTable";
import QualifyTable from "../Qualify/QualifyTable";
import DriverStandingTable from "../DriverStandings/DriverStandingsTable";
import LapTimesTable from "../LapTimes/LapTimesTable";
import LapTimesForm from "../LapTimes/LapTimesForm";
import "../../styles/race.css";
import "../../App.css";
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
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-moment';

const RaceResults = ({raceResults,raceResultsFlag,qualyResultsFlag,qualyResults,driverStandingsFlag,driverStandings,lapTimes,lapTimesFlag,handleDriversChange,onSubmitDrivers}) => {

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
    Tooltip
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
          driver:driver,
          lap:dataLapTimes.lap[i],
          // position:dataLapTimes.position[i],
          time:dataLapTimes.time[i],
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

    const labels = lapTimes.map(driver => {
      console.log(driver);
      return driver.drivers.code + '; LAP ' + driver.lap;
    });
    const data = {
      labels,
      datasets : [
        {
          key:'laptime',
          label:'lap',
          data:lapTimes.map(time => time.time),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID:'y',
          xAxisID:'x1',
          // stack:'Stack 0'
        },
        // {
        //   key:'lap',
        //   label:'Lap',
        //   data:newDataLapTimes.map(lap => lap.lap),
        //   borderColor: 'rgb(120, 99, 132)',
        //   backgroundColor: 'rgba(120, 99, 132, 0.5)',
        //   yAxisID:'y1',
        //   xAxisID:'x2',
        //   stack:'Stack 1'
        // }
      ]
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Lap Times',
        },
      },
      scales: {
        x1:{
          ticks:{
            font:{
              size:8,
            },
            // callback: function(value, index, values) {
            //   return this.getLabelForValue(value).split(';');
            // }
          }
        },
          // x1:{
          //   xAxisID:'x1',
          //   position: 'top',
          //   ticks: {
          //     font:{
          //       size:8,
          //     },
          //     maxTicksLimit: 350,
          //     callback: function(value, index, values) {
          //       return this.getLabelForValue(value).split(';')[0];
          //     }
          //   }
          // },
          // x2:{
          //   xAxisID:'x2',
          //   position: 'bottom',
          //   ticks: {
          //     font:{
          //       size:10,
          //     },
          //     maxTicksLimit: 350,
          //     callback: function(value, index, values) {
          //       return this.getLabelForValue(value).split(';')[1];
          //     }
          //   }
          // },
          y: {
            display: true,
            stacked:true,
            type: 'time',
            time: {
                parser: 'HH:mm:ss',
                unit: "seconds",
                tooltipFormat: 'HH:mm:ss',
                displayFormats: {
                    'seconds': "HH:mm:ss"
                },
            },
            min: '1:0.0',
            max: '2:7.0',
            xAxisID:'x1',
            ticks:{
              autoSkip: true,
              maxTicksLimit: 15
            }
          },
          // y1:{
          //   type:'linear',
          //   stacked:true,
          //   display:true,
          //   position:'right',
          //   ticks:{
          //     autoSkip: true,
          //     maxTicksLimit: 15
          //   },
          //   grid: {
          //     drawOnChartArea: false,
          //   },
          //   xAxisID:'x2',
          // },
        }
      };

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
                  {lapTimesFlag && <LapTimesTable columns={columnsLapTimes} data={newDataLapTimes}/>}
                </div>
                <div className="card-body">
                  <div className="card-header">
                    <h3 className="card-title">
                      <b>Lap Times of the race.</b>
                    </h3>
                  </div>
                  <LapTimesForm raceResults={raceResults} handleDriversChange = {handleDriversChange} onSubmitDrivers={onSubmitDrivers}/>
                    {lapTimesFlag && <Bar options={options} data={data} redraw />}
                </div>
              </div>
          </div>
        </>
    )
};
export default RaceResults;