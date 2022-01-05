import React, { useState, useEffect} from "react";
import CircuitTable from "./CircuitTable";
import "../../styles/circuit.css";
import "../../App.css"
import axios from "axios";
import CircuitCountryForm from "./CircuitCountryForm";
import CircuitRacesForm from "./CircuitRacesForm";

const initialCountry = "";

const CircuitList = () => {

  const [circuits, setCircuits] = useState([]);
  const [countries,setCountries] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState(initialCountry);
  const [circuitsInfo,setCircuitsInfo] = useState([]);
  const [selectedRace,setSelectedRace] = useState([0]);
  const [isSubmitted,setIsSubmitted] = useState(false);

  useEffect(() => {
    const getCircuits = () => {
      fetch("http://localhost:5000/api/all-circuits")
        .then((res) => res.json())
        .then((res) => setCircuits(res));
    };
    getCircuits();
  }, []);

  useEffect(() => {
    const getCountries = () => {
      fetch("http://localhost:5000/api/all-countrys")
        .then((res) => res.json())
        .then((res) => setCountries(res));
    };
    getCountries();
  }, []);


  const handleChange = (e) => {
    setSelectedCountry({
        ...selectedCountry,
        Country:e.target.value
    })
  };
  const handleChangeCircuit = (e) => {
    setIsSubmitted(false);
    setSelectedRace({
      ...selectedRace,
      Circuit:e.target.value,
    })
  }

  const getCiruitsByCountry = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/circuit-by-country",{
      Country:selectedCountry.Country
    })
    .then(res => res.data)
    .then(res => setCircuitsInfo(res));
  }

  const getRaceByCircuit= async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/race-by-circuit",{
      Circuit:selectedRace.Circuit
    })
    .then(res => res.data)
    .then(res => setSelectedRace(res));
    setIsSubmitted(true);
  }

  const qCircuits = circuitsInfo.length;
  const qRaces = selectedRace.length;


  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "circuitId", // accessor is the "key" in the data
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header:"Info",
        accessor: "url",
        Cell: ({ row }) => (
            <div>
                <a type="button" className="btn btn-danger" href={row.original.url} target="_blank">
                    More Info
                </a>
            </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-lg-6">
            <div className="card-body">
                  <div className="card-header">
                    <h3 className="card-title">
                      <b>Circuits of F1</b>
                    </h3>
                  </div>
                  <div className="scrollable">
                    <CircuitTable columns={columns} data={circuits} />
                  </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">
                  <b>Countries</b>
                </h3>
              </div>
              <CircuitCountryForm
                handleChange={handleChange}
                countries={countries}
                getCiruitsByCountry={getCiruitsByCountry}
                qCircuits={qCircuits}
                circuitsInfo={circuitsInfo}
                circuits={circuits}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">
                  <b>Races Info</b>
                </h3>
              </div>
              <CircuitRacesForm
                circuits={circuits}
                handleChangeCircuit={handleChangeCircuit}
                getRaceByCircuit={getRaceByCircuit}
                qRaces={qRaces}
                selectedRace={selectedRace}
                isSubmitted={isSubmitted}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircuitList;
