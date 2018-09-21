'use strict';
module.exports = (sequelize, DataTypes) => {
  const Filters = sequelize.define('Register', {
    id: {
      field: "Id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password :    { type: DataTypes.STRING }
  }, {

      timestamps: false

    });
  Filters.associate = function (models) {
    // associations can be defined here
  };
  return Filters;
};