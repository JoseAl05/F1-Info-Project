import React, {Fragment} from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Route,Routes,useLocation} from 'react-router-dom';
import CircuitList from './components/Circuits/CircuitList';
import DriverList from './components/Drivers/DriverList';
import ConstructorList from './components/Constructors/ConstructorList';
import NavbarV2 from './components/Navbar/NavbarV2';
import RaceResultsForm from './components/Results/RaceResultsForm';
import RaceList from './components/Races/RaceList';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

function App() {


  return (
    <Fragment>
        <Router>
            <NavbarV2 />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/circuits" element={<CircuitList/>} />
                <Route path="/races" element={<RaceList/>}/>
                <Route path="/drivers" element={<DriverList/>} />
                <Route path="/constructors" element={<ConstructorList/>}/>
                <Route path="/race-results-form/:raceId" element={<RaceResultsForm/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </Router>
    </Fragment>
  );

}

export default App;
