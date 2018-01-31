'use strict';
module.exports = (sequelize, DataTypes) => {
  var Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    sks: DataTypes.INGTEGER
  });
  return Class;
};
