import React, { useState, useEffect,useLayoutEffect} from "react";
import "../../styles/race.css";
import "../../App.css"
import axios from "axios";
import {useParams} from 'react-router-dom';
import RaceResults from "./RaceResults";

const RaceResultsForm = () => {
    const [raceResults,setRaceResults] = useState([]);
    const [qualyResults,setQualyResults] = useState([]);
    const [raceResultsFlag,setRaceResultsFlag] = useState(false);
    const [qualyResultsFlag,setQualyResultsFlag] = useState(false);
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
    useLayoutEffect(() => {
        getQualyResults();
    }, []);

    return(
        <>
            <RaceResults
                raceResults={raceResults}
                raceResultsFlag ={raceResultsFlag}
                qualyResultsFlag={qualyResultsFlag}
                qualyResults={qualyResults}
            />
        </>
    )
};
export default RaceResultsForm;