'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return Student;
};
