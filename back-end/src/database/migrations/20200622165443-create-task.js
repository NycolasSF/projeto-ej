'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('tasks', {
        Id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
        },
        UserId:{
          type: Sequelize.INTEGER,
          allowNull:false,
          references: {model: 'users', key: 'Id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        Type:{
          type: Sequelize.INTEGER,
          allowNull:false,
          references: {model: 'types', key: 'Id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        Title: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        Image: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        InitData: {
          type: Sequelize.DATE,
          allowNull:false,
        },
        EndData: {
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
