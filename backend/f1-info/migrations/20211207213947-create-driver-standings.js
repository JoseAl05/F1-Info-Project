'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('driverStandings', {
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
      points: {
        type: Sequelize.FLOAT
      },
      position: {
        type: Sequelize.INTEGER
      },
      positionText: {
        type: Sequelize.STRING
      },
      wins: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('driverStandings');
  }
};