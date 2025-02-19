/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      fileName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      originalName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
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
    await queryInterface.dropTable('fotos');
  },
};
