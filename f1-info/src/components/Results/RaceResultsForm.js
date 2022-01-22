import React, { useState,useEffect} from "react";
import "../../styles/race.css";
import "../../App.css"
import axios from "axios";
import {useParams} from 'react-router-dom';
import RaceResults from "./RaceResults";
import AuthHeader from "../../services/auth-header";

const RaceResultsForm = () => {
    const [raceResults,setRaceResults] = useState([]);
    const [qualyResults,setQualyResults] = useState([]);
    const [driverStandings,setDriverStandings] = useState([]);
    const [lapTimes,setLapTimes] = useState([]);
    const [raceResultsFlag,setRaceResultsFlag] = useState(false);
    const [qualyResultsFlag,setQualyResultsFlag] = useState(false);
    const [driverStandingsFlag,setDriverStandingsFlag] = useState(false);
    const [lapTimesFlag,setLapTimesFlag] = useState(false);
    const {raceId} = useParams();
    const [selectedDrivers,setSelectedDrivers] = useState([]);
    const [laps,setLaps] = useState([]);
    const [labels,setLabels] = useState([]);
    const [driversSelected,setDriversSelected] = useState([]);
    const [data,setData] = useState({labels:[],datasets:[]});
    // const [isSubmitted,setIsSubmitted] = useState(false);

    const getRaceResults = async() => {
        await axios.post(`http://localhost:5000/api/race-results/${raceId}`,{},{headers:AuthHeader()})
        .then(res => res.data)
        .then(res => setRaceResults(res));
        setRaceResultsFlag(true);
    }
    useEffect(() => {
        getRaceResults();
    }, []);

    const getQualyResults = async() => {
        await axios.post(`http://localhost:5000/api/qualy-results/${raceId}`,{},{headers:AuthHeader()})
        .then(res => res.data)
        .then(res => setQualyResults(res));
        setQualyResultsFlag(true);
    }

    const getDriverStandings = async() => {
        await axios.post(`http://localhost:5000/api/driver-standings/${raceId}`,{},{headers:AuthHeader()})
        .then(res => res.data)
        .then(res => setDriverStandings(res))
        setDriverStandingsFlag(true);
    }

    const handleDriversChange = (selectedOptions) => {
        const driversId = [];
        const driversCode = [];
        for(let i = 0 ; i<selectedOptions.length;i++){
            driversId.push(selectedOptions[i].value);
            driversCode.push(selectedOptions[i].label);
        }
        setSelectedDrivers(driversId);
        setDriversSelected(driversCode);
    }

    const handleLapsChange = (selectedOptions) => {
        // const rangeOfLaps = [];
        // for(let i = 0 ; i<selectedOptions.length;i++){
        //     rangeOfLaps.push(selectedOptions);
        // }
        setLaps(selectedOptions);
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // const selectedD = async() => {

    //     await axios.post(`http://localhost:5000/api/a/${raceId}/`,{
    //             Drivers:selectedDrivers,
    //             lap:laps,
    //         },
    //     )
    //     .then(res => res.data)
    //     .then(res => setDriversSelected(res))
    // }


    const getLapTimes = async(e) => {
        e.preventDefault();

        await axios.post(`http://localhost:5000/api/lap-times-by-race/${raceId}/`,{
            Drivers:selectedDrivers,
            lap:laps,
        },
        {
            headers:AuthHeader(),
        })
        .then(res => res.data)
        .then(res => {
            setLapTimes(res);
            // console.log(res);
            let dataSetsForChart = {};
            res.forEach((element,i) => {
                dataSetsForChart={
                    labels:res.map(driver => driver.drivers.code),
                    datasets:[
                        {
                            label:'Position',
                            data:res.map(position => position.position),
                            backgroundColor:[getRandomColor()],
                            yAxisID:'y',
                        },
                        {
                            label:'Lap',
                            data:res.map(lap => lap.lap),
                            backgroundColor:[getRandomColor()],
                            yAxisID:'y1',
                        }
                    ]
                }
                return dataSetsForChart;
            })
            console.log(dataSetsForChart);
            // for(let i = 0 ; i<laps.length ; i++){
            //     dataSetsForChart={
            //         labels:[driversSelected[i]],
            //         datasets:[
            //             {
            //                 label:'Position',
            //                 data:res.filter(driver => driver.drivers.driverId === selectedDrivers[i]).map(position => position.position),
            //                 backgroundColor:[getRandomColor()],
            //                 fill:false,
            //             },
            //             {
            //                 label:'Lap',
            //                 data:res.filter(driver => driver.drivers.driverId === selectedDrivers[i]).map(lap => lap.lap),
            //                 backgroundColor:[getRandomColor()],
            //                 fill:false,
            //             }
            //         ]
            //     }
            // }
            setData(dataSetsForChart);
            // const data = [
            //     {
            //         dataSets:dataSets,
            //     }
            // ]
            // setData(dataSets);
            // const data = {
            //     labels:res.map(driver => driver.drivers.code),
            //     datasets:
            //     [
            //         {
            //             label:'Driver Position',
            //             data:res.map(position => position.position),
            //             backgroundColor:[getRandomColor()],
            //         },
            //         {
            //             label:'Lap',
            //             data:res.map(lap => lap.lap),
            //             backgroundColor:[getRandomColor()],
            //         }
            //     ],
            // };
            // setData(data);
        });

        setLapTimesFlag(true);
    }
    // console.log(data);
    const onSubmitDrivers = async (e) => {
        // setIsSubmitted(true);
        getLapTimes(e);
        // selectedD();
    }

    useEffect(() => {
        getQualyResults();
        getDriverStandings();
        // selectedD();
    }, []);

    return(
        <>
            <RaceResults
                raceResults={raceResults}
                raceResultsFlag ={raceResultsFlag}
                qualyResultsFlag={qualyResultsFlag}
                qualyResults={qualyResults}
                driverStandingsFlag={driverStandingsFlag}
                driverStandings = {driverStandings}
                lapTimes = {lapTimes}
                lapTimesFlag = {lapTimesFlag}
                handleDriversChange = {handleDriversChange}
                onSubmitDrivers = {onSubmitDrivers}
                handleLapsChange  = {handleLapsChange}
                labels = {labels}
                data = {data}
            />
        </>
    )
};
export default RaceResultsForm;