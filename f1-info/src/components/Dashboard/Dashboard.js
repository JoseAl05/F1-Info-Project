import React, {lazy} from 'react';
import '../../App.css';
import '../../fonts/f1Fonts/stylesheet.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom';
import { faCar,faUsers,faFlagCheckered,faTable,faBusinessTime, faHourglass, faTh,faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* CIRCUITS IMAGES */
import albertPark from '../../images/albertPark.webp';
import monza from '../../images/monza.webp';
import interlagos from '../../images/interlagos.webp';
import spa from '../../images/spa.webp';
import susuka from '../../images/susuka.webp';
import circuitOfAmericas from '../../images/circuitOfAmericas.png';

/* RACES IMAGES */
import race1 from '../../images/race.webp';
import race2 from '../../images/race2.webp';
import race3 from '../../images/race3.webp';
import race4 from '../../images/race4.webp';

/* DRIVERS IMAGES */
import hamilton from '../../images/hamilton.webp';
import russel from '../../images/russell.webp';
import verstappen from '../../images/verstappen.webp';
import perez from '../../images/perez.webp';
import leclerc from '../../images/leclerc.webp';
import sainz from '../../images/sainz.webp';
import norris from '../../images/norris.webp';
import ricciardo from '../../images/ricciardo.webp';
import ocon from '../../images/ocon.webp';
import alonso from '../../images/alonso.webp';
import stroll from '../../images/stroll.webp';
import vettel from '../../images/vettel.webp';
import gasly from '../../images/gasly.webp';
import tsunoda from '../../images/tsunoda.webp';
import bottas from '../../images/bottas.webp';
import zhou from '../../images/zhou.webp';
import schumacher from '../../images/shumacher.webp';
import mazepin from '../../images/mazepin.webp';

/* CONSTRUCTORS IMAGES */
import mercedes from '../../images/mercedes.webp';
import redbull from '../../images/redbull.webp';
import ferrari from '../../images/ferrari.webp';
import mclaren from '../../images/mclaren.webp';
import alpine from '../../images/alpine.webp';
import astonMartin from '../../images/astonmartin.webp';
import alphaTauri from '../../images/alphatauri.webp';
import alfaRomeo from '../../images/alfaromeo.webp';
import williams from '../../images/williams.webp';
import haas from '../../images/haas.webp';
import LazyImage from './LazyImages';
import LazyImageSlider from './LazyImagesSlider';


const propertiesDriversSlide = {
    duration: 3000,
    // slidesToShow: 2,
    // slidesToScroll: 2,
    indicators: true,
    ease:'easing',
    arrows:false
};

/* CIRCUITS IMAGES */
// const albertParkImg = {
//     backgroundImage: 'url(' + albertPark + ')',
// }
// const monzaImg = {
//     backgroundImage:'url(' + monza + ')',
// }
// const interlagosImg = {
//     backgroundImage:'url(' + interlagos + ')',
// }
// const spaImg = {
//     backgroundImage:'url(' + spa + ')',
// }
// const susukaImg = {
//     backgroundImage:'url(' + susuka + ')',
// }
// const circuitsOfAmericasImg = {
//     backgroundImage:'url(' + circuitOfAmericas + ')',
// }
const albertParkImg = albertPark;
const monzaImg =monza;
const interlagosImg =interlagos;
const spaImg = spa;
const susukaImg =susuka;
const circuitsOfAmericasImg =circuitOfAmericas;

const circuitImages = [albertParkImg,monzaImg,interlagosImg,spaImg,susukaImg,circuitsOfAmericasImg];


/* RACES IMAGES*/
// const raceImg1 = {
//     backgroundImage:'url(' + race1 + ')',
// }
// const raceImg2 = {
//     backgroundImage:'url(' + race2 + ')',
// }
// const raceImg3 = {
//     backgroundImage:'url(' + race3 + ')',
// }
// const raceImg4 = {
//     backgroundImage:'url(' + race4 + ')',
// }
const raceImg1 = race1;

const raceImg2 = race2;

const raceImg3 = race3;

const raceImg4 = race4;


const racesImages = [raceImg1,raceImg2,raceImg3,raceImg4];

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
const mercedesImg = mercedes;
const redbullImg = redbull;
const ferrariImg = ferrari;
const mclarenImg = mclaren;
const alpineImg = alpine;
const astonMartinImg = astonMartin;
const alphaTauriImg = alphaTauri;
const alfaRomeoImg = alfaRomeo;
const williamsImg = williams;
const haasImg = haas;

const constructorsImages = [mercedesImg,redbullImg,ferrariImg,mclarenImg,alpineImg,astonMartinImg,alphaTauriImg,alfaRomeoImg,williamsImg,haasImg];



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
                        {/* <div className="col-sm left-col"> */}
                            <div className="border--top-left">
                                <span className="border-span"></span>
                                <div className="content-circuits">
                                    <h1 className="circuit-header">Circuits</h1>
                                    <div className="slider">
                                        <div className="slider-content">
                                            {circuitImages.map((circuits,index)=>(
                                                <LazyImage
                                                    key={index}
                                                    src={circuits}
                                                />
                                            ))}
                                            {/* <div className="image-content" style={albertParkImg}></div>
                                            <div className="image-content" style={monzaImg}></div>
                                            <div className="image-content" style={interlagosImg}></div>
                                            <div className="image-content" style={spaImg}></div>
                                            <div className="image-content" style={susukaImg}></div>
                                            <div className="image-content" style={circuitsOfAmericasImg}></div> */}
                                        </div>
                                    </div>
                                    <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the years of the races and much more!</p>
                                    <Link to={"/circuits"} type="button" className="button-redirection">Go to Circuits!</Link>
                                </div>
                            </div>
                        {/* </div> */}
                        {/* <div className="col-sm middle-col">
                        </div> */}
                        {/* <div className="col-sm right-col"> */}
                            <div className="border--top-right ml-auto">
                                <div className="content-races">
                                    <h1 className="races-header">Races</h1>
                                    <div className="slider">
                                        <div className="slider-content">
                                        {racesImages.map((races,index)=>(
                                                <LazyImage
                                                    key={index}
                                                    src={races}
                                                />
                                        ))}
                                            {/* <div className="image-content" style={raceImg1}></div>
                                            <div className="image-content" style={raceImg2}></div>
                                            <div className="image-content" style={raceImg3}></div>
                                            <div className="image-content" style={raceImg4}></div> */}
                                        </div>
                                    </div>
                                    <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the year of the race and much more!</p>
                                    <Link to={"/races"} type="button" className="button-redirection">Go to Races!</Link>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
            <section className="dashboard-drivers-constructors">
                <div className="container">
                    <div className="row">
                        <div className='col-6'>
                            <div className="content-drivers">
                                <h1 className="drivers-header">Drivers</h1>
                                <Slide {...propertiesDriversSlide}>
                                    {
                                        slideDriverImages.map((drivers,index) =>(
                                            <LazyImageSlider
                                                key={index}
                                                src={drivers}
                                            />
                                        ))
                                    }
                                    {/* <div className="slide-drivers">
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
                                    </div> */}
                                </Slide>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='drivers-info'>
                                <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the year of the race and much more!</p>
                                <Link to={"/drivers"} type="button" className="button-redirection">Go to Drivers!</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className='col-6'>
                            <div className='constructors-info'>
                                <p>A list of all the circuits that F1 has raced on. You can look at the circuits of each country and see how many races have been held, the year of the race and much more!</p>
                                <Link to={"/constructors"} type="button" className="button-redirection">Go to Constructors!</Link>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="constructor-section">
                                <div className="content-constructors">
                                    <h1 className="constructors-header">Constructors</h1>
                                    <div className="constructors-grid">
                                        {
                                            constructorsImages.map((constructors,index) =>(
                                                <LazyImage
                                                    key={index}
                                                    src={constructors}
                                                />
                                            ))
                                        }
                                        {/* <div className="constructor" style={mercedesImg}></div>
                                        <div className="constructor" style={redbullImg}></div>
                                        <div className="constructor" style={ferrariImg}></div>
                                        <div className="constructor" style={mclarenImg}></div>
                                        <div className="constructor" style={alpineImg}></div>
                                        <div className="constructor" style={astonMartinImg}></div>
                                        <div className="constructor" style={alphaTauriImg}></div>
                                        <div className="constructor" style={alfaRomeoImg}></div>
                                        <div className="constructor" style={williamsImg}></div>
                                        <div className="constructor" style={haasImg}></div> */}
                                    </div>
                                </div>
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
            <section className="dashboard-references">
                <div className="col-12">
                    <div className='references'>
                        <p>All data you find here is provided by <a type="button" href="http://ergast.com/mrd/" className="reference-button" target="_blank" rel="noreferrer">Ergast Developer API.</a></p>
                        <p>All Drivers images are from <a type="button" href="https://www.formula1.com" className="reference-button" target="_blank" rel="noreferrer">Formula 1 WebPage.</a> and <a type="button" href="https://www.mediawiki.org/wiki/MediaWiki" className="reference-button" target="_blank" rel="noreferrer">MediaWiki.</a></p>
                    </div>
                </div>
            </section>
            <section className="dashboard-footer">
                <div className='footer-copyright'>
                    <footer>
                        <div className='copy'>
                            <FontAwesomeIcon icon={faCopyright}/> 2022 Jose Pablo Arancibia Linker
                        </div>
                        <p>Website design by Jose Pablo Arancibia Linker.</p>
                        <p>Code by Jose Pablo Arancibia Linker.</p>
                    </footer>
                </div>
            </section>
        </section>
    )
}
export default Dashboard;