'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('qualifyings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      raceId: {
        type: Sequelize.INTEGER
      },
      driverId: {
        type: Sequelize.INTEGER
      },
      constructorId: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.INTEGER
      },
      q1: {
        type: Sequelize.STRING
      },
      q2: {
        type: Sequelize.STRING
      },
      q3: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('qualifyings');
  }
};