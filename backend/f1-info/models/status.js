'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status extends Model {

    static associate(models) {
    }
  };
  status.init({
    statusId:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'status',
    freezeTableName:true,
  });

  status.associate = models =>{
    status.hasMany(models.results,{
      foreignKey:'statusId',
      as:'results'
    })
  }
  return status;
};