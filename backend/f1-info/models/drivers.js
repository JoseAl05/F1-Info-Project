'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drivers extends Model {
    static associate(models) {
    }
  };
  drivers.init({
    driverId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    code: DataTypes.STRING,
    dob: DataTypes.DATE,
    driverRef: DataTypes.INTEGER,
    forename: DataTypes.STRING,
    nationality: DataTypes.STRING,
    number: DataTypes.INTEGER,
    surname: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'drivers',
  });

  drivers.associate = models => {
    drivers.hasMany(models.results,{
      foreignKey:'driverId',
      as:'results'
    })
  }
  return drivers;
};