'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('comentarios',
    'usuario');
  },

  async down (queryInterface, Sequelize) {
  }
};
