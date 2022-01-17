'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laptimes extends Model {
    
    static associate(models) {
    }
  };
  laptimes.init({
    lap:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    raceId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    time: DataTypes.STRING,
    milliseconds: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'laptimes',
  });

  laptimes.associate = models => {
    laptimes.belongsTo(models.drivers,{
      foreignKey:'driverId',
      as:'drivers',
    })
  }

  return laptimes;
};