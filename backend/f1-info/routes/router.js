const router = require('express').Router();
const CircuitsController = require('../controllers/circuitsController');
const DriverController = require('../controllers/driversController');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/all-circuits/',CircuitsController.getAllCircuits);
router.get('/all-drivers/',DriverController.getAllDrivers);
router.get('/all-countrys/',CircuitsController.getCountrys);
router.post('/circuit-by-country/',CircuitsController.getCircuitsByCountry);


module.exports = router;
