import React, { useState} from "react";
import RaceTable from "./RaceTable";
import "../../styles/circuit.css";
import "../../App.css"
import axios from "axios";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import {Link} from 'react-router-dom';
import AuthHeader from "../../services/auth-header";

const RaceList = () => {
    const [raceByYear,setRaceByYear] = useState([]);
    const [selectedYear,setSelectedYear] = useState("");

    const handleChangeYear = (e) => {
        setSelectedYear({
            Year:e._d.getFullYear(),
        })
    }

    const getRaceByYear = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/race-by-year/",{
            Year:selectedYear.Year,
        },
        {
            headers:AuthHeader(),
        })
        .then(res => res.data)
        .then(res => setRaceByYear(res));
    }


    const columns = React.useMemo(
        () => [
          {
            Header: "ID",
            accessor: "raceId", // accessor is the "key" in the data
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Round",
            accessor: "round",
          },
          {
            Header:"Year",
            accessor:"year",
          },
          {
            Header:"Date",
            accessor:"date"
          },
          {
              Header:"Time",
              accessor:"time"
          },
          {
            Header:"Info",
            accessor: "url",
            Cell: ({ row }) => (
                <div>
                    <a type="button" className="btn btn-danger " href={row.original.url} target="_blank" rel="noreferrer">
                      More Info
                    </a>
                    <Link to={`/race-results-form/${row.original.raceId}`} target="_blank" rel="noreferrer">
                      <button type="button" className="btn btn-success btn-see-results-races">
                        See Results
                      </button>
                    </Link>
                </div>
            ),
          },
        ],
        []
      );

    console.log(selectedYear);

    return(
        <>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-body">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <b>Races Info</b>
                                    </h3>
                                </div>
                                <div className="mt-5">
                                    <form onSubmit={getRaceByYear}>
                                        <DateTime dateFormat="YYYY" timeFormat={false} onChange={handleChangeYear}></DateTime>
                                        <button type="submit" className="btn btn-danger">Search Races</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card-body">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <b>Races Info</b>
                                    </h3>
                                </div>
                                <div className="mt-5">
                                    <RaceTable columns={columns} data={raceByYear}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RaceList;