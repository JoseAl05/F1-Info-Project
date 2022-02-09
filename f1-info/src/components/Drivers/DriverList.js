import React, { useState, useEffect} from "react";
import "../../App.css";
import axios from "axios";
import DriverTable from './DriverTable';
import DriversForm from "./DriversForm";
import AuthHeader from "../../services/auth-header";
import AuthService from "../../services/auth.service";
import Modal from 'react-bootstrap/Modal';
import DriversInformation from "./DriversInformation";
import {Link} from 'react-router-dom';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [isLoadingDrivers,setIsLoadingDrivers] = useState(true);
  const [isSelecetedDriver,setIsSelectedDriver] = useState(false);
  const [isDriverInfo,setIsDriverInfo] = useState(false);
  const [isSubmitted,setIsSubmitted] = useState(false);
  // const [driverWins,setDriverWins] = useState(0);
  // const [driverPodiums,setDriverPodiums] = useState(0);
  // const [driverPoles,setDriverpoles] = useState(0);
  // const [scoredRaces,setScoredRaces] = useState(0);
  // const [driverPoints,setDriverPoints] = useState([0]);
  // const [lapsCompleted,setLapsCompleted] = useState([0]);
  // const [driverTotalRaces,setDriverTotalRaces] = useState(0);
  const [selectedDriver,setSelectedDriver] = useState(0);
  const [selectedDriverName,setSelectedDriverName] = useState("");
  const [isShowed, setIsShowed] = useState(true);

  const getAllDrivers = async() => {
    await axios.get("http://localhost:5000/api/all-drivers",{headers:AuthHeader()})
    .then(res => res.data)
    .then(res => setDrivers(res));
    setIsLoadingDrivers(false);
  }


  const handleDriverChange = (e) => {
    setSelectedDriver({
      ...selectedDriver,
      Driver:e.value
    });
    setSelectedDriverName({
      ...selectedDriverName,
      driverName:e.label,
    })

    setIsSelectedDriver(true);
    setIsDriverInfo(false);
    setIsSubmitted(false);
  };

  useEffect(() => {
    getAllDrivers();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "driverId", // accessor is the "key" in the data
      },
      {
        Header: "First Name",
        accessor: "forename",
      },
      {
        Header: "Surname",
        accessor: "surname",
      },
      {
        Header:'Nationality',
        accessor:'nationality',
      },
      {
        Header:"Info",
        accessor: "url",
        Cell: ({ row }) => (
            <div>
                <a type="button" className="btn btn-danger" href={row.original.url} target="_blank" rel="noreferrer">
                    More Info
                </a>
                <Link to={`/driverStats/${row.original.driverId}/${row.original.forename}/${row.original.surname}/${isShowed}`} rel="noreferrer">
                      <button type="button" className="btn btn-success btn-see-results-races">
                        See Stats
                      </button>
                </Link>
            </div>
        ),
      },
    ],
    []
  );


  if(!AuthService.getCurrentUser()){
    return(
      <>
        <h1>No Permission!</h1>
      </>
    )
  }

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-12">
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">
                  <b>List of All Drivers</b>
                </h3>
              </div>
              <div className="scrollable">
                <DriverTable columns={columns} data={drivers}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverList;
