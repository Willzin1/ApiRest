/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },

      created_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('alunos');
  },
};
