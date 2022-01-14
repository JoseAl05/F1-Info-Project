const Sequelize = require("sequelize");
const CircuitsModel = require("./models").circuits;
const DriversModel = require("./models").drivers;
const ConstructorsModel = require("./models").constructors;
const RaceModel = require("./models").races;
const ResultsModel = require("./models").results;
const DriverStandingsModel = require("./models").driverstandings;
const StatusModel = require("./models").status;
const QualifyModel = require("./models").qualify;
const LapTimesModel = require("./models").laptimes;
const UserModel = require("./models").users;

const sequelize = new Sequelize('f1_info','mysql','jpal0598deser',{
    host:'localhost',
    dialect: 'mysql'
});




sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

const Circuit = new CircuitsModel(sequelize, Sequelize);
const Driver = new DriversModel(sequelize,Sequelize);
const Constructor = new ConstructorsModel(sequelize,Sequelize);
const Race = new RaceModel(sequelize,Sequelize);
const Results= new ResultsModel(sequelize,Sequelize);
const DriverStandings = new DriverStandingsModel(sequelize,Sequelize);
const Status = new StatusModel(sequelize,Sequelize);
const Qualify = new QualifyModel(sequelize,Sequelize);
const LapTimes = new LapTimesModel(sequelize,Sequelize);
const User = new UserModel(sequelize,Sequelize);

await sequelize.sync({
    force: true
})
.then(() => {
    console.log("Sincronizated Tables")
})

module.exports = {
  Circuit,
  Driver,
  Constructor,
  Race,
  Results,
  DriverStandings,
  Status,
  Qualify,
  LapTimes,
  User
}