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
        user_id:{
          type: Sequelize.INTEGER,
          allowNull:false,
          references: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        type_id:{
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
        init_data: {
          type: Sequelize.DATE,
          allowNull:false,
        },
        end_data: {
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
