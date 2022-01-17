import React from 'react';
import "../../styles/circuit.css";
import "../../App.css"
import RaceTable from "../Races/RaceTable";
import {Link} from 'react-router-dom';



const CircuitRacesForm = ({circuits,handleChangeCircuit,getRaceByCircuit,qRaces,selectedRace,isSubmitted}) => {
    let text;
    if(selectedRace.length > 1){
        text = <p className="p-info-circuits mt-3">{qRaces} races have been contested in the {selectedRace[0].name}</p>;
    }else{
        text = <p className="p-info-circuits mt-3">No circuit Selected</p>;
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
                    <Link to={`/race-results-form/${row.original.raceId}`}>
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


    return(
        <>
            <form onSubmit={getRaceByCircuit}>
                <div className="select-countries">
                    <select className="custom-select" name="circuit" id="circuit" onChange={handleChangeCircuit}>
                        {circuits.map(circuit => (
                        <option key={circuit.circuitId} value={circuit.circuitId}>{circuit.name}</option>
                        ))}
                    </select>
                    <span className="custom-arrow"></span>
                </div>
                <button className="btn btn-danger btn-flat mt-5">Search Races</button>
            </form>
            {text}
            {isSubmitted && <RaceTable data={selectedRace} columns={columns}/>}
        </>
    )
};
export default CircuitRacesForm;