'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('phases', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
      },
      task_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'tasks', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      on_off: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('phases');
  }
};
