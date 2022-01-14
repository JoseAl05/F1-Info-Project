'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    static associate(models) {

    }
  };
  user.init({
    userId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    surname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName:true,
  });
  return user;
};