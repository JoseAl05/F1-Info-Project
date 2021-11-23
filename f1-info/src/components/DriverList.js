import React,{useState,useEffect } from 'react';


const DriverList = () => {
    const [drivers,setDrivers] = useState([])

    useEffect(() => {
      const getDrivers = () => {
        fetch('http://localhost:5000/api/all-drivers')
        .then(res => res.json())
        .then(res => setDrivers(res));
      }
      getDrivers();
    },[])


    return(
    <div className="container">
        <div class="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card-header">
                            <h3 className="card-title" id="driver-filter"><b>Filters</b></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-lg-8">
                            <div className="card-header">
                                <h3 className="card-title"><b>Details of Drivers</b></h3>
                            </div>
                            <table className="table mt-2">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Nationality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {drivers.map(driver => (
                                        <tr key={driver.driverId}>
                                            <td>{driver.driverId}</td>
                                            <td>{driver.forename}</td>
                                            <td>{driver.surname}</td>
                                            <td>{driver.nationality}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DriverList;