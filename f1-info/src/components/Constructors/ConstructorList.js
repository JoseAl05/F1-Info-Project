import React, { useState, useEffect} from "react";
import "../../App.css";
import axios from "axios";
import ConstructorTable from "./ConstructorTable";

const ConstructorList = () => {
  const [constructors, setConstructors] = useState([]);

  const getAllConstructors = async() => {
    await axios.get("http://localhost:5000/api/all-constructors")
    .then(res => res.data)
    .then(res => setConstructors(res));
  }

  useEffect(() => {
    getAllConstructors();
  }, []);


  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "constructorId", // accessor is the "key" in the data
      },
      {
        Header: "Constructor Name",
        accessor: "name",
      },
      {
        Header: "Nationality",
        accessor: "nationality",
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
                  <b>Constructors of F1</b>
                </h3>
              </div>
              <div className="scrollable">
                <ConstructorTable columns={columns} data={constructors}/>
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

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructorList;
