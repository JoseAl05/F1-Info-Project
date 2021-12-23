'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class qualifying extends Model {
    static associate(models) {
    }
  };
  qualifying.init({
    qualifyId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    raceId: DataTypes.INTEGER,
    driverId: DataTypes.INTEGER,
    constructorId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    q1: DataTypes.STRING,
    q2: DataTypes.STRING,
    q3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'qualifying',
    freezeTableName:true,
  });

  qualifying.associate = models => {
    qualifying.belongsTo(models.races,{
      foreignKey:'raceId',
      as:'races'
    }),
    qualifying.belongsTo(models.drivers,{
      foreignKey:'driverId',
      as:'drivers'
    })
  }
  return qualifying;
};