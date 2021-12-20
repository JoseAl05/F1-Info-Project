'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.INTEGER
      },
      round: {
        type: Sequelize.INTEGER
      },
      circuitId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.TIME
      },
      url: {
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
    await queryInterface.dropTable('races');
  }
};