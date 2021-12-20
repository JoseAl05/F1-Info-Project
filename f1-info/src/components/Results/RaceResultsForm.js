import React, { useState, useEffect,useLayoutEffect} from "react";
import "../../styles/race.css";
import "../../App.css"
import axios from "axios";
import {useParams} from 'react-router-dom';
import RaceResults from "./RaceResults";

const RaceResultsForm = () => {
    const [raceResults,setRaceResults] = useState([]);
    const [raceResultsFlag,setRaceResultsFlag] = useState(false);
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

    console.log(raceResults);




    return(
        <>
            {raceResultsFlag && <RaceResults raceResults={raceResults}/>}
        </>
    )
};
export default RaceResultsForm;