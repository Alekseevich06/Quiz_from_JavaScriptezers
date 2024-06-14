'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        {
        name: 'John Doe',
        password: '12345',
        email: "test@test",
        score: 0
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
