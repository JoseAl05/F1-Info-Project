const router = require('express').Router();
const CircuitsController = require('../controllers/circuitsController');
const DriverController = require('../controllers/driversController');
const ConstructorController = require('../controllers/constructorsController');
const RaceController = require('../controllers/racesController');
const RaceResultsController = require('../controllers/raceResultsController');
const DriverStandingsController = require('../controllers/driversStandingsController');
const StatusController = require('../controllers/statusController');
const QualifyingController = require('../controllers/qualifyingController');
const LapTimesController = require('../controllers/lapTimesController');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // CIRCUITS //
router.get('/all-circuits/',CircuitsController.getAllCircuits);
router.get('/all-countrys/',CircuitsController.getCountrys);
router.post('/circuit-by-country/',CircuitsController.getCircuitsByCountry);

  // DRIVERS //
router.get('/all-drivers/',DriverController.getAllDrivers);
router.post('/driver-from-race/',DriverController.getDriversFromARace);

  // CONSTRUCTORS //
router.get('/all-constructors/',ConstructorController.getAllConstructors);
router.post('/constructor-from-race/',ConstructorController.getConstructorFromARace);

  // RACE //
router.post('/race-by-circuit/',RaceController.getARace);
router.post('/race-by-year/',RaceController.getARaceByYear);

  // RACE RESULTS //
router.post('/wins-by-driver/',RaceResultsController.getWins);
router.post('/podiums-by-driver/',RaceResultsController.getPodiums);
router.post('/scored-races-by-driver/',RaceResultsController.getNumberOfRacesScored);
router.post('/poles-by-driver/',RaceResultsController.getNumberOfPoles);
router.post('/points-by-driver/',RaceResultsController.getTotalPointsByDriver);
router.post('/race-results/:raceId',RaceResultsController.getRaceResults);
router.post('/laps-by-driver/',RaceResultsController.getLapsCompleted);
router.post('/total-races-by-driver/',RaceResultsController.getTotalRaces);

  // LAPTIMES //
router.post('/lap-times-by-race/:raceId',LapTimesController.getLapTimesByRace);

  // QUALIFYING //
router.post('/qualy-results/:raceId',QualifyingController.getQualifySession);

  // DRIVER STANDINGS //
router.post('/driver-standings/:raceId',DriverStandingsController.getDriverStandingsByRace);

  // STATUS //
router.post('/status/',StatusController.getStatus);


module.exports = router;
