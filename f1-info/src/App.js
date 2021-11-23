import React, {Fragment} from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import CircuitList from './components/Circuits/CircuitList';
import DriverList from './components/DriverList';
import Index from './components/Navbar/Index';
import NavbarV2 from './components/Navbar/NavbarV2';

function App() {


  return (
    <Fragment>
        <Router>
          <NavbarV2/>
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/circuits" element={<CircuitList/>} />
              <Route path="/drivers" element={<DriverList/>} />
          </Routes>
        </Router>
    </Fragment>
  );

}

export default App;
