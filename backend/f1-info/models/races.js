'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class races extends Model {

    static associate(models) {
    }
  };
  races.init({
    raceId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    year: DataTypes.INTEGER,
    round: DataTypes.INTEGER,
    circuitId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'races',
  });

  races.associate = models => {
    races.hasMany(models.qualifying,{
      foreignKey:'raceId',
      as:'races'
    })
  }
  return races;
};