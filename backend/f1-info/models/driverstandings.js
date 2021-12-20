'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class driverStandings extends Model {

    static associate(models) {

    }
  };
  driverStandings.init({
    driverStandingsId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    raceId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    points: DataTypes.FLOAT,
    position: DataTypes.INTEGER,
    positionText: DataTypes.STRING,
    wins: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'driverStandings',
  });
  return driverStandings;
};