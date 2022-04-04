import React, {Fragment,lazy,Suspense} from 'react'
// import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import CircuitList from './components/Circuits/CircuitList';
// import DriverList from './components/Drivers/DriverList';
// import ConstructorList from './components/Constructors/ConstructorList';
// import NavbarV2 from './components/Navbar/NavbarV2';
// import RaceResultsForm from './components/Results/RaceResultsForm';
// import RaceList from './components/Races/RaceList';
// import Login from './components/Login/Login';
// import SignUp from './components/Login/SignUp';
// import DriversInformation from './components/Drivers/DriversInformation';
const Dashboard = lazy( () => import('./components/Dashboard/Dashboard'));
const CircuitList = lazy( () => import('./components/Circuits/CircuitList'));
const DriverList = lazy( () => import('./components/Drivers/DriverList'));
const ConstructorList = lazy( () => import('./components/Constructors/ConstructorList'));
const NavbarV2 = lazy( () => import('./components/Navbar/NavbarV2'));
const RaceResultsForm = lazy( () => import('./components/Results/RaceResultsForm'));
const RaceList = lazy( () => import('./components/Races/RaceList'));
const Login = lazy( () => import('./components/Login/Login'));
const SignUp = lazy( () => import('./components/Login/SignUp'));
const DriversInformation = lazy( () => import('./components/Drivers/DriversInformation'));

function App() {


  return (
    <>
        <Router>
          <Suspense fallback={<div>Loading....</div>}>
              <NavbarV2 />
              <Routes>
                  <Route path="/" element={<Dashboard/>} />
                  <Route path="/circuits" element={<CircuitList/>} />
                  <Route path="/races" element={<RaceList/>}/>
                  <Route path="/drivers" element={<DriverList/>} />
                  <Route path="/constructors" element={<ConstructorList/>}/>
                  <Route path="/race-results-form/:raceId" element={<RaceResultsForm/>}/>
                  <Route path="/driverStats/:driverId/:driverForename/:driverSurname/:isShowed" element={<DriversInformation/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
              </Routes>
          </Suspense>
        </Router>
    </>
  );

}

export default App;
