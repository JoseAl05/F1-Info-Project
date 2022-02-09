import React from 'react';
import '../App.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {Link} from 'react-router-dom';
import { faCar,faUsers,faFlagCheckered,faTable,faBusinessTime, faHourglass, faTh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../fonts/f1Fonts/stylesheet.css';

/* CIRCUITS IMAGES */
import albertPark from '../images/albertPark.png';
import monza from '../images/monza.png';
import interlagos from '../images/interlagos.png';
import spa from '../images/spa.png';
import susuka from '../images/susuka.png';
import circuitOfAmericas from '../images/circuitOfAmericas.png';

/* RACES IMAGES */
import race1 from '../images/race.jpg';
import race2 from '../images/race2.jpg';
import race3 from '../images/race3.jpg';
import race4 from '../images/race4.jpg';

/* DRIVERS IMAGES */
import hamilton from '../images/hamilton.jpg';
import russel from '../images/russell.jpg';
import verstappen from '../images/verstappen.jpg';
import perez from '../images/perez.jpg';
import leclerc from '../images/leclerc.jpg';
import sainz from '../images/sainz.jpg';
import norris from '../images/norris.jpg';
import ricciardo from '../images/ricciardo.jpg';
import ocon from '../images/ocon.jpg';
import alonso from '../images/alonso.jpg';
import stroll from '../images/stroll.jpg';
import vettel from '../images/vettel.jpg';
import gasly from '../images/gasly.jpg';
import tsunoda from '../images/tsunoda.jpg';
import bottas from '../images/bottas.jpg';
import zhou from '../images/zhou.jpg';
import schumacher from '../images/shumacher.jpg';
import mazepin from '../images/mazepin.jpg';

/* CONSTRUCTORS IMAGES */
import mercedes from '../images/mercedes.jpeg';
import redbull from '../images/redbull.jpg';
import ferrari from '../images/ferrari.jpg';
import mclaren from '../images/mclaren.jpg';
import alpine from '../images/alpine.jpg';
import astonMartin from '../images/astonmartin.png';
import alphaTauri from '../images/alphatauri.jpg';
import alfaRomeo from '../images/alfaromeo.png';
import williams from '../images/williams.jpg';
import haas from '../images/haas.jpg';


const propertiesDriversSlide = {
    duration: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    indicators: true,
    ease:'easing'
};

/* CIRCUITS IMAGES */
const albertParkImg = {
    backgroundImage: 'url(' + albertPark + ')',
}
const monzaImg = {
    backgroundImage:'url(' + monza + ')',
}
const interlagosImg = {
    backgroundImage:'url(' + interlagos + ')',
}
const spaImg = {
    backgroundImage:'url(' + spa + ')',
}
const susukaImg = {
    backgroundImage:'url(' + susuka + ')',
}
const circuitsOfAmericasImg = {
    backgroundImage:'url(' + circuitOfAmericas + ')',
}


/* RACES IMAGES*/
const raceImg1 = {
    backgroundImage:'url(' + race1 + ')',
}
const raceImg2 = {
    backgroundImage:'url(' + race2 + ')',
}
const raceImg3 = {
    backgroundImage:'url(' + race3 + ')',
}
const raceImg4 = {
    backgroundImage:'url(' + race4 + ')',
}

/* DRIVERS IMAGES */
const slideDriverImages = [
    hamilton,
    russel,
    verstappen,
    perez,
    leclerc,
    sainz,
    norris,
    ricciardo,
    ocon,
    alonso,
    stroll,
    vettel,
    gasly,
    tsunoda,
    bottas,
    zhou,
    schumacher,
    mazepin,
]

/* CONSTRUCTORS IMAGES */
const mercedesImg = {
    backgroundImage:'url(' + mercedes + ')',
}
const redbullImg = {
    backgroundImage:'url(' + redbull + ')',
}
const ferrariImg = {
    backgroundImage:'url(' + ferrari + ')',
}
const mclarenImg = {
    backgroundImage:'url(' + mclaren + ')',
}
const alpineImg = {
    backgroundImage:'url(' + alpine + ')',
}
const astonMartinImg = {
    backgroundImage:'url(' + astonMartin + ')',
}
const alphaTauriImg = {
    backgroundImage:'url(' + alphaTauri + ')',
}
const alfaRomeoImg = {
    backgroundImage:'url(' + alfaRomeo + ')',
}
const williamsImg = {
    backgroundImage:'url(' + williams + ')',
}
const haasImg = {
    backgroundImage:'url(' + haas + ')',
}



const Dashboard = () => {

    return(
        <section>
            <section className="dashboard-title">
                <div>
                    <div className="content-header">
                        <h1>F1 Information</h1>
                        <p>Search all information of history of F1. <br /></p>
                        <div>
                            <a type="button" href="https://www.formula1.com" className="button-dashboard" target="_blank" rel="noreferrer">Visit Official F1 WebPage</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-circuits-races">
                <div className="container">
                    <div className="row">
                        <div className="col-sm left-col">
                            <div className="border--top-left">
                                <span className="border-span"></span>
                                <div className="content-circuits">
                                    <h1 className="circuit-header">Circuits</h1>
                                    <div className="slider">
                                        <div className="slider-content">
                                            <div className="image-content" style={albertParkImg}></div>
                                            <div className="image-content" style={monzaImg}></div>
                                            <div className="image-content" style={interlagosImg}></div>
                                            <div className="image-content" style={spaImg}></div>
                                            <div className="image-content" style={susukaImg}></div>
                                            <div className="image-content" style={circuitsOfAmericasImg}></div>
                                        </div>
                                    </div>
                                    <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the years of the races and much more!</p>
                                    <Link to={"/circuits"} type="button" className="button-redirection">Go to Circuits!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm middle-col">
                        </div>
                        <div className="col-sm right-col">
                            <div className="border--top-right ml-auto">
                                <div className="content-races">
                                    <h1 className="races-header">Races</h1>
                                    <div className="slider">
                                        <div className="slider-content">
                                            <div className="image-content" style={raceImg1}></div>
                                            <div className="image-content" style={raceImg2}></div>
                                            <div className="image-content" style={raceImg3}></div>
                                            <div className="image-content" style={raceImg4}></div>
                                        </div>
                                    </div>
                                    <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the year of the race and much more!</p>
                                    <Link to={"/races"} type="button" className="button-redirection">Go to Races!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-drivers-constructors">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <fieldset className="border-top-right-bottom--drivers">
                                <legend className="drivers-legend">
                                    <h1 className="drivers-header">Drivers</h1>
                                </legend>
                                <div className="content-drivers">
                                    <Slide {...propertiesDriversSlide}>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[0]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[1]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[2]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[3]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[4]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[5]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[6]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[7]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[8]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[9]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[10]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[11]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[12]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[13]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[14]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[15]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[16]})`}}/>
                                        </div>
                                        <div className="slide-drivers">
                                            <div style={{"backgroundImage":`url(${slideDriverImages[17]})`}}/>
                                        </div>
                                    </Slide>
                                    <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the year of the race and much more!</p>
                                    <Link to={"/drivers"} type="button" className="button-redirection">Go to Drivers!</Link>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="constructor-section">
                                <fieldset className="border-top-right-bottom--constructors">
                                    <legend className="constructors-legend">
                                        <h1 className="constructors-header">Constructors</h1>
                                    </legend>
                                    <div className="content-constructors">
                                        <div className="constructors-grid">
                                            <div className="constructor" style={mercedesImg}></div>
                                            <div className="constructor" style={redbullImg}></div>
                                            <div className="constructor" style={ferrariImg}></div>
                                            <div className="constructor" style={mclarenImg}></div>
                                            <div className="constructor" style={alpineImg}></div>
                                            <div className="constructor" style={astonMartinImg}></div>
                                            <div className="constructor" style={alphaTauriImg}></div>
                                            <div className="constructor" style={alfaRomeoImg}></div>
                                            <div className="constructor" style={williamsImg}></div>
                                            <div className="constructor" style={haasImg}></div>
                                        </div>
                                        <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the year of the race and much more!</p>
                                        <Link to={"/constructors"} type="button" className="button-redirection">Go to Constructors!</Link>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-drivers-constructors">
                <div>
                    <div className="col-12">
                        <div className="separator"></div>
                        <h2 className="results-header">You can also find on this website</h2>
                        <div className="results">
                            <FontAwesomeIcon icon={faUsers} color='#D72323' />
                            <h4>Drivers Stats</h4>
                            <FontAwesomeIcon icon={faTable} color='#D72323' />
                            <h4>Drivers Standings</h4>
                            <FontAwesomeIcon icon={faCar} color='#D72323' />
                            <h4>Constructors Stats</h4>
                            <FontAwesomeIcon icon={faTable} color='#D72323' />
                            <h4>Constructors Standings</h4>
                            <FontAwesomeIcon icon={faHourglass} color='#D72323' />
                            <h4>Qualy Results</h4>
                            <FontAwesomeIcon icon={faFlagCheckered} color='#D72323' />
                            <h4>Race Results</h4>
                            <FontAwesomeIcon icon={faHourglass} color='#D72323' />
                            <h4>Drivers Lap Times</h4>
                            <FontAwesomeIcon icon={faTh} color='#D72323'/>
                            <h4>Drivers Positions by Lap</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dashboard-drivers-constructors">
                <div>
                    <div className="col-12">
                        <h1>ALGO</h1>
                    </div>
                </div>
            </section>
            <section className="dashboard-drivers-constructors">
                <div>
                    <div className="col-12">
                        <h1 style={{"backgroundColor":"#30475E"}}>FOOTER</h1>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Dashboard;