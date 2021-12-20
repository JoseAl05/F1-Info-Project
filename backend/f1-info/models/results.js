'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class results extends Model {
    static associate(models) {
    }
  };
  results.init({
    resultId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    raceId:DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    constructorId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    grid: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    positionText: DataTypes.STRING,
    positionOrder: DataTypes.STRING,
    points: DataTypes.FLOAT,
    laps: DataTypes.INTEGER,
    time: DataTypes.STRING,
    milliseconds: DataTypes.INTEGER,
    fastestLap: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    fastestLapTime: DataTypes.STRING,
    fastestLapSpeed: DataTypes.STRING,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'results',
  });

  results.associate = models => {
    results.belongsTo(models.status,{
      foreignKey:'statusId',
      as:'status'
    })

    results.belongsTo(models.drivers,{
      foreignKey:'driverId',
      as:'drivers'
    })
  }
  return results;
};