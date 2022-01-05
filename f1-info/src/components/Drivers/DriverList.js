import React, { useState, useEffect} from "react";
import "../../App.css";
import axios from "axios";
import DriverTable from './DriverTable';
import DriversForm from "./DriversForm";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);
  const [isLoadingDrivers,setIsLoadingDrivers] = useState(true);
  const [isSelecetedDriver,setIsSelectedDriver] = useState(false);
  const [isDriverInfo,setIsDriverInfo] = useState(false);
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [driverWins,setDriverWins] = useState(0);
  const [driverPodiums,setDriverPodiums] = useState(0);
  const [driverPoles,setDriverpoles] = useState(0);
  const [scoredRaces,setScoredRaces] = useState(0);
  const [driverPoints,setDriverPoints] = useState([0]);
  const [lapsCompleted,setLapsCompleted] = useState([0]);
  const [driverTotalRaces,setDriverTotalRaces] = useState(0);
  const [selectedDriver,setSelectedDriver] = useState(0);
  const [selectedDriverName,setSelectedDriverName] = useState("");

  const getAllDrivers = async() => {
    await axios.get("http://localhost:5000/api/all-drivers")
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

  const getDriverInfo = async(e) => {

    e.preventDefault();
    
    await axios.post("http://localhost:5000/api/wins-by-driver/",{
        Driver:selectedDriver.Driver
    })
    .then(res => res.data)
    .then(res => setDriverWins(res));

    await axios.post("http://localhost:5000/api/podiums-by-driver/",{
      Driver:selectedDriver.Driver
    })
    .then(res => res.data)
    .then(res => setDriverPodiums(res));

    await axios.post("http://localhost:5000/api/scored-races-by-driver/",{
      Driver:selectedDriver.Driver
    })
    .then(res => res.data)
    .then(res => setScoredRaces(res));

    await axios.post("http://localhost:5000/api/poles-by-driver/",{
      Driver:selectedDriver.Driver
    })
    .then(res => res.data)
    .then(res => setDriverpoles(res));

    await axios.post("http://localhost:5000/api/points-by-driver/",{
      Driver:selectedDriver.Driver
    })
    .then(res => res.data)
    .then(res => setDriverPoints(res));

    await axios.post("http://localhost:5000/api/laps-by-driver/",{
      Driver:selectedDriver.Driver
    })
    .then(res => res.data)
    .then(res => setLapsCompleted(res));

    await axios.post("http://localhost:5000/api/total-races-by-driver/",{
      Driver:selectedDriver.Driver
    })
    .then(res => res.data)
    .then(res => setDriverTotalRaces(res));

    setIsDriverInfo(true);
    setIsSubmitted(false);
  }

  const onSubmitDriverInfo = async (e) => {
    setIsSubmitted(true);
    getDriverInfo(e);
  }

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
                  <b>List of All Drivers</b>
                </h3>
              </div>
              <div className="scrollable">
                <DriverTable columns={columns} data={drivers}/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">
                  <b>Drivers Data</b>
                </h3>
              </div>
              <DriversForm
                drivers={drivers}
                driverWins={driverWins}
                scoredRaces={scoredRaces}
                driverPoles={driverPoles}
                driverPoints={driverPoints}
                lapsCompleted={lapsCompleted}
                driverTotalRaces={driverTotalRaces}
                handleDriverChange={handleDriverChange}
                selectedDriverName={selectedDriverName}
                driverPodiums={driverPodiums}
                onSubmitDriverInfo = {onSubmitDriverInfo}
                isLoadingDrivers={isLoadingDrivers}
                isSelecetedDriver={isSelecetedDriver}
                isDriverInfo = {isDriverInfo}
                isSubmitted = {isSubmitted}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverList;
