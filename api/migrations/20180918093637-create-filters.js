'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Filters', {
      id: {
        field: "Id",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: { type: Sequelize.STRING },
      value: { type: Sequelize.STRING }
      // name: {
      //   type: Sequelize.STRING
      // },
      // value: {
      //   type: Sequelize.STRING
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  paranoid: true,
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Filters');
  }
};