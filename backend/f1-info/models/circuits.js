'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class circuits extends Model {

    static associate(models) {
    }
  };
  circuits.init({
    circuitId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    alt: DataTypes.INTEGER,
    circuitRef: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    location: DataTypes.STRING,
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'circuits',
  });
  return circuits;
};