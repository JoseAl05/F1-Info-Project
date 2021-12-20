'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class constructors extends Model {
    static associate(models) {
    }
  };
  constructors.init({
    constructorId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    constructorRef: DataTypes.STRING,
    name: DataTypes.STRING,
    nationality: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'constructors',
  });
  return constructors;
};