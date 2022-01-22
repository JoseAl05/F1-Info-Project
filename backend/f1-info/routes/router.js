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
const UsersController = require('../controllers/usersController.js');
const verifySignUp = require('../middleware/verifySignUp');
const authJwt = require('../middleware/authJwt');

router.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token,Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // USERS //
router.post('/signup/',[verifySignUp.checkDuplicateUsername],[verifySignUp.checkDuplicateEmail],UsersController.registerAUser);
router.post('/signin/',UsersController.login);

  // CIRCUITS //
router.get('/all-circuits/',[authJwt.verifyToken],CircuitsController.getAllCircuits);
router.get('/all-countrys/',[authJwt.verifyToken],CircuitsController.getCountrys);
router.post('/circuit-by-country/',[authJwt.verifyToken],CircuitsController.getCircuitsByCountry);

  // DRIVERS //
router.get('/all-drivers/',[authJwt.verifyToken],DriverController.getAllDrivers);
router.post('/driver-from-race/',[authJwt.verifyToken],DriverController.getDriversFromARace);

  // CONSTRUCTORS //
router.get('/all-constructors/',[authJwt.verifyToken],ConstructorController.getAllConstructors);
router.post('/constructor-from-race/',[authJwt.verifyToken],ConstructorController.getConstructorFromARace);

  // RACE //
router.post('/race-by-circuit/',[authJwt.verifyToken],RaceController.getARace);
router.post('/race-by-year/',[authJwt.verifyToken],RaceController.getARaceByYear);

  // RACE RESULTS //
router.post('/wins-by-driver/',[authJwt.verifyToken],RaceResultsController.getWins);
router.post('/podiums-by-driver/',[authJwt.verifyToken],RaceResultsController.getPodiums);
router.post('/scored-races-by-driver/',[authJwt.verifyToken],RaceResultsController.getNumberOfRacesScored);
router.post('/poles-by-driver/',[authJwt.verifyToken],RaceResultsController.getNumberOfPoles);
router.post('/points-by-driver/',[authJwt.verifyToken],RaceResultsController.getTotalPointsByDriver);
router.post('/race-results/:raceId',[authJwt.verifyToken],RaceResultsController.getRaceResults);
router.post('/laps-by-driver/',[authJwt.verifyToken],RaceResultsController.getLapsCompleted);
router.post('/total-races-by-driver/',[authJwt.verifyToken],RaceResultsController.getTotalRaces);

  // LAPTIMES //
router.post('/lap-times-by-race/:raceId/',[authJwt.verifyToken],LapTimesController.getLapTimesByRace);
router.post('/lap-times-by-race-test/:raceId/',LapTimesController.getLapTimesByRaceTest);
router.post('/a/:raceId/',LapTimesController.countDrivers);

  // QUALIFYING //
router.post('/qualy-results/:raceId',[authJwt.verifyToken],QualifyingController.getQualifySession);

  // DRIVER STANDINGS //
router.post('/driver-standings/:raceId',[authJwt.verifyToken],DriverStandingsController.getDriverStandingsByRace);

  // STATUS //
router.post('/status/',[authJwt.verifyToken],StatusController.getStatus);


module.exports = router;
