'use strict';
module.exports = (sequelize, DataTypes) => {
  const Filters = sequelize.define('Filters', {
    id: {
      field: "Id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: DataTypes.STRING }
   
  }, {

      timestamps: false

    });
  Filters.associate = function (models) {
    // associations can be defined here
  };
  return Filters;
};