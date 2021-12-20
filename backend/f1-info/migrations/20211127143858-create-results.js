'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dirverId: {
        type: Sequelize.INTEGER
      },
      constructorId: {
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.INTEGER
      },
      grid: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.INTEGER
      },
      positionText: {
        type: Sequelize.STRING
      },
      positionOrder: {
        type: Sequelize.STRING
      },
      points: {
        type: Sequelize.FLOAT
      },
      laps: {
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING
      },
      miliseconds: {
        type: Sequelize.INTEGER
      },
      fastestLap: {
        type: Sequelize.INTEGER
      },
      rank: {
        type: Sequelize.INTEGER
      },
      fastestLapTime: {
        type: Sequelize.STRING
      },
      fastestLapSpeed: {
        type: Sequelize.STRING
      },
      statusId: {
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
    await queryInterface.dropTable('results');
  }
};