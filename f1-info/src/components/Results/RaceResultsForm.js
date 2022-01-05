import React, { useState, useEffect,useLayoutEffect} from "react";
import "../../styles/race.css";
import "../../App.css"
import axios from "axios";
import {useParams} from 'react-router-dom';
import RaceResults from "./RaceResults";

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

    const getRaceResults = async() => {
        await axios.post(`http://localhost:5000/api/race-results/${raceId}`)
        .then(res => res.data)
        .then(res => setRaceResults(res));
        setRaceResultsFlag(true);
    }
    useLayoutEffect(() => {
        getRaceResults();
    }, []);

    const getQualyResults = async() => {
        await axios.post(`http://localhost:5000/api/qualy-results/${raceId}`)
        .then(res => res.data)
        .then(res => setQualyResults(res));
        setQualyResultsFlag(true);
    }

    const getDriverStandings = async() => {
        await axios.post(`http://localhost:5000/api/driver-standings/${raceId}`)
        .then(res => res.data)
        .then(res => setDriverStandings(res))
        setDriverStandingsFlag(true);
    }
    const getLapTimes = async() => {
        await axios.post(`http://localhost:5000/api/lap-times-by-race/${raceId}`)
        .then(res => res.data)
        .then(res => setLapTimes(res));
        setLapTimesFlag(true);
    }
    useLayoutEffect(() => {
        getQualyResults();
        getDriverStandings();
        getLapTimes();
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
            />
        </>
    )
};
export default RaceResultsForm;