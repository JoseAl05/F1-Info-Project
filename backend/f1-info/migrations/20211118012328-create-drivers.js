'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drivers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      driverRef: {
        type: Sequelize.INTEGER
      },
      forename: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },
      surname: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('drivers');
  }
};