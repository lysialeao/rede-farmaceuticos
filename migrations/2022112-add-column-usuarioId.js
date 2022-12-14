'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('medicamentos',
    'usuarioId',
    {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model: 'usuarios',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('medicamentos',
    'usuarioId');
  }
};
