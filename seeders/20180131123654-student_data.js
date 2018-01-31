'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Students', [{
        name    : 'Tsubasa',
        gender  : 'Male',
        email   : 'tsubasa.ozora@gmail.com'
      },{
        name    : 'Hyuga',
        gender  : 'Male',
        email   : 'hyuga.kojiro@gmail.com'
      }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
