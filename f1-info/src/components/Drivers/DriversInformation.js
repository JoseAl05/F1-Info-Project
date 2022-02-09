import React,{useState, useEffect} from 'react';
import "../../App.css";
import "../../styles/driver.css";
import AuthHeader from "../../services/auth-header";
import AuthService from "../../services/auth.service";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { Link,useParams } from 'react-router-dom';
import {faSpinner,faTrophy,faUsers,faFlagCheckered} from "@fortawesome/free-solid-svg-icons";
import {GiPodium} from 'react-icons/gi';
import {RiNumber1} from 'react-icons/ri';
import {MdPlusOne} from 'react-icons/md';
import {BiTime} from 'react-icons/bi';
import {TiArrowRepeat} from 'react-icons/ti';
import {FaSortAmountUp} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DriversInformation = ({}) => {
    // const [drivers, setDrivers] = useState([]);
    // const [isLoadingDrivers,setIsLoadingDrivers] = useState(true);
    // const [isSelecetedDriver,setIsSelectedDriver] = useState(false);
    const {driverId,driverForename,driverSurname,isShowed} = useParams()
    console.log(isShowed);
    const setIsShowed = useState(isShowed);
    const [isDriverInfo,setIsDriverInfo] = useState(false);
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [driverWins,setDriverWins] = useState(0);
    const [driverPodiums,setDriverPodiums] = useState(0);
    const [driverPoles,setDriverpoles] = useState(0);
    const [scoredRaces,setScoredRaces] = useState(0);
    const [driverPoints,setDriverPoints] = useState([0]);
    const [lapsCompleted,setLapsCompleted] = useState([0]);
    const [driverTotalRaces,setDriverTotalRaces] = useState(0);
    // const [selectedDriver,setSelectedDriver] = useState(0);
    // const [selectedDriverName,setSelectedDriverName] = useState("");
    const [driversImgs,setDriversImgs] = useState({});
    const wikiEndPoint = 'https://en.wikipedia.org/w/api.php';
    const [show, setShow] = useState(true);
    let pageId = 0;

    const handleClose = () => setShow(false);

    const getDriverInfo = async() => {

        const wikiParams = '?action=query'
        +'&format=json'
        +'&origin=*'
        +'&prop=pageimages'
        +'&indexpageids=1'
        +'&titles='+driverForename+'%20'+driverSurname
        +'&piprop=original%7Cthumbnail'
        +'&pithumbsize=400'
        const wikiLink = wikiEndPoint + wikiParams

        console.log(wikiLink);

        await axios.get(wikiLink)
            .then(res => res.data)
            .then(res => setDriversImgs(res));

        await axios.get("http://localhost:5000/api/wins-by-driver",{
            headers:AuthHeader(),
            params: {
                Driver:driverId
            }
        })
        .then(res => res.data)
        .then(res => setDriverWins(res));

        await axios.get("http://localhost:5000/api/podiums-by-driver/",{
            headers:AuthHeader(),
            params: {
                Driver:driverId
            }
        })
        .then(res => res.data)
        .then(res => setDriverPodiums(res));

        await axios.get("http://localhost:5000/api/scored-races-by-driver/",{
            headers:AuthHeader(),
            params: {
                Driver:driverId
            }
        })
        .then(res => res.data)
        .then(res => setScoredRaces(res));

        await axios.get("http://localhost:5000/api/poles-by-driver/",{
            headers:AuthHeader(),
            params: {
                Driver:driverId
            }
        })
        .then(res => res.data)
        .then(res => setDriverpoles(res));

        await axios.get("http://localhost:5000/api/points-by-driver/",{
            headers:AuthHeader(),
            params: {
                Driver:driverId
            }
        })
        .then(res => res.data)
        .then(res => setDriverPoints(res));

        await axios.get("http://localhost:5000/api/laps-by-driver/",{
            headers:AuthHeader(),
            params: {
                Driver:driverId
            }
        })
        .then(res => res.data)
        .then(res => setLapsCompleted(res));

        await axios.get("http://localhost:5000/api/total-races-by-driver/",{
            headers:AuthHeader(),
            params: {
                Driver:driverId
            }
        })
        .then(res => res.data)
        .then(res => setDriverTotalRaces(res));

        setIsDriverInfo(true);
        setIsSubmitted(false);
    }
    useEffect(() => {
        getDriverInfo();
    }, []);
    if(isDriverInfo){
        pageId = driversImgs.query.pageids[0];
    }
    return (
        <>
            <Modal show={isShowed} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        !isDriverInfo &&
                        <div className='loading-driver-info'>
                            <h6>
                                <FontAwesomeIcon icon={faSpinner} color='#D72323' size='lg' aria-hidden='true' spin />
                                &nbsp;&nbsp;Calculating Data... Wait a moment
                            </h6>
                        </div>
                    }
                    {isDriverInfo && driverWins === 0 && driverPodiums === 0 && driverPoles === 0 &&
                        <div>
                            <img src={driversImgs.query.pages[pageId].thumbnail.source} className='driver-image'/>
                            <div className="card-container">
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Wins
                                            </h3>
                                            <p>Has no victories in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <GiPodium className='i'/>
                                                {/* <FontAwesomeIcon icon={faUsers} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Podimus
                                            </h3>
                                            <p>Has no podimus in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <BiTime className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Poles
                                            </h3>
                                            <p>Has no victories in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFlagCheckered} size='2x' aria-hidden='true' className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Races
                                            </h3>
                                            <p>Has completed {driverTotalRaces} races.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <MdPlusOne className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Scored points Races
                                            </h3>
                                            <p>Has scored points in {scoredRaces} races..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <TiArrowRepeat className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has completed {lapsCompleted[0].totalLaps} laps.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FaSortAmountUp className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has {driverPoints[0].totalPoints} points scored in his career.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        // <div>
                        //     <img src={driversImgs.query.pages[pageId].thumbnail.source}/>
                        //     <ul>
                        //         <li>Has no victories in F1.</li>
                        //         <li>Has no podiums in F1.</li>
                        //         <li>Has no poles in F1.</li>
                        //         <li>Has completed {driverTotalRaces} races.</li>
                        //         <li>Has scored in {scoredRaces} races.</li>
                        //         <li>Has completed {lapsCompleted[0].totalLaps} laps.</li>
                        //         <li>Has {driverPoints[0].totalPoints} points scored in his career.</li>
                        //     </ul>
                        // </div>
                    }
                    {
                        isDriverInfo && driverPodiums > 0 && driverWins > 0 && driverPoles > 0 &&
                        <div>
                            <img src={driversImgs.query.pages[pageId].thumbnail.source} className='driver-image'/>
                            <div className="card-container">
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Wins
                                            </h3>
                                            <p>Has {driverWins} victories in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <GiPodium className='i'/>
                                                {/* <FontAwesomeIcon icon={faUsers} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Podimus
                                            </h3>
                                            <p>Has {driverPodiums} podiums in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <BiTime className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Poles
                                            </h3>
                                            <p>Has {driverPoles} poles in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFlagCheckered} size='2x' aria-hidden='true' className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Races
                                            </h3>
                                            <p>Has completed {driverTotalRaces} races.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <MdPlusOne className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Scored points Races
                                            </h3>
                                            <p>Has scored points in {scoredRaces} races..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <TiArrowRepeat className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has completed {lapsCompleted[0].totalLaps} laps.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FaSortAmountUp className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has {driverPoints[0].totalPoints} points scored in his career.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        isDriverInfo &&driverWins === 0 && driverPodiums > 0 && driverPoles > 0 &&
                        <div>
                            <img src={driversImgs.query.pages[pageId].thumbnail.source} className='driver-image'/>
                            <div className="card-container">
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Wins
                                            </h3>
                                            <p>Has no victories in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <GiPodium className='i'/>
                                                {/* <FontAwesomeIcon icon={faUsers} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Podimus
                                            </h3>
                                            <p>Has {driverPodiums} podiums in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <BiTime className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Poles
                                            </h3>
                                            <p>Has {driverPoles} poles in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFlagCheckered} size='2x' aria-hidden='true' className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Races
                                            </h3>
                                            <p>Has completed {driverTotalRaces} races.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <MdPlusOne className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Scored points Races
                                            </h3>
                                            <p>Has scored points in {scoredRaces} races..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <TiArrowRepeat className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has completed {lapsCompleted[0].totalLaps} laps.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FaSortAmountUp className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has {driverPoints[0].totalPoints} points scored in his career.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        isDriverInfo &&driverWins === 0 && driverPodiums > 0 && driverPoles === 0 &&
                        <div>
                            <img src={driversImgs.query.pages[pageId].thumbnail.source} className='driver-image'/>
                            <div className="card-container">
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Wins
                                            </h3>
                                            <p>Has no victories in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <GiPodium className='i'/>
                                                {/* <FontAwesomeIcon icon={faUsers} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Podimus
                                            </h3>
                                            <p>Has {driverPodiums} podiums in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <BiTime className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Poles
                                            </h3>
                                            <p>Has no poles in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFlagCheckered} size='2x' aria-hidden='true' className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Races
                                            </h3>
                                            <p>Has completed {driverTotalRaces} races.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <MdPlusOne className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Scored points Races
                                            </h3>
                                            <p>Has scored points in {scoredRaces} races..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <TiArrowRepeat className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has completed {lapsCompleted[0].totalLaps} laps.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FaSortAmountUp className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has {driverPoints[0].totalPoints} points scored in his career.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        isDriverInfo &&driverWins > 0 && driverPodiums > 0 && driverPoles === 0 &&
                        <div>
                            <img src={driversImgs.query.pages[pageId].thumbnail.source} className='driver-image'/>
                            <div className="card-container">
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Wins
                                            </h3>
                                            <p>Has {driverWins} victories in F1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <GiPodium className='i'/>
                                                {/* <FontAwesomeIcon icon={faUsers} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Podimus
                                            </h3>
                                            <p>Has {driverPodiums} podiums in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <BiTime className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Poles
                                            </h3>
                                            <p>Has no poles in F1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faFlagCheckered} size='2x' aria-hidden='true' className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Races
                                            </h3>
                                            <p>Has completed {driverTotalRaces} races.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <MdPlusOne className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Scored points Races
                                            </h3>
                                            <p>Has scored points in {scoredRaces} races..</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <TiArrowRepeat className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has completed {lapsCompleted[0].totalLaps} laps.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-driver-info">
                                    <div className="slide slide1">
                                        <div className="content">
                                            <div className="icon">
                                                <FaSortAmountUp className='i'/>
                                                {/* <FontAwesomeIcon icon={faTrophy} size='2x' aria-hidden='true' className='i'/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide slide2">
                                        <div className="content">
                                            <h3>
                                                Laps Completed
                                            </h3>
                                            <p>Has {driverPoints[0].totalPoints} points scored in his career.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-danger" onClick={handleClose}>
                    <Link to={'/drivers'} rel="noreferrer">
                        Back
                    </Link>
                </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DriversInformation;