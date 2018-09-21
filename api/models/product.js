'use strict';
module.exports = (sequelize, DataTypes) => {
  const Filters = sequelize.define('Product', {
    id: {
      field: "Id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: { type: DataTypes.STRING },
    imgUrl: { type: DataTypes.STRING },
    categoryId: { type: DataTypes.INTEGER },
    description :    { type: DataTypes.STRING },
    cost :  { type: DataTypes.INTEGER }
  }, {

      timestamps: false

    });
  Filters.associate = function (models) {
    // associations can be defined here
  };
  return Filters;
};