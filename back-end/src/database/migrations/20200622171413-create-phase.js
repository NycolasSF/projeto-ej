'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('phases', {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
      },
      TaskId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {model: 'tasks', key: 'Id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      Title: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      On_off: {
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
