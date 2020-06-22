'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tasks', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
        },
        userId:{
          type: Sequelize.INTEGER,
          allowNull:false,
          references: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        type:{
          type: Sequelize.INTEGER,
          allowNull:false,
          references: {model: 'types', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        title: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        initData: {
          type: Sequelize.DATE,
          allowNull:false,
        },
        endData: {
          type: Sequelize.DATE,
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
      return queryInterface.dropTable('tasks');
  }
};
