'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
        Id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false,
        },
        Name: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        Email: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        Password: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        On_off: {
          type: Sequelize.BOOLEAN,
          allowNull:false,
        },
        Avatar: {
          type: Sequelize.STRING,
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
      return queryInterface.dropTable('users');
  }
};
