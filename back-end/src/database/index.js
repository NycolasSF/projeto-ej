const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Type = require('../models/Type');
const Task = require('../models/Task');
const Phase = require('../models/Phase');

const connection = new Sequelize(dbConfig);

User.init(connection);
Type.init(connection);
Task.init(connection);
Phase.init(connection);

User.associate(connection.models);
Task.associate(connection.models);
Phase.associate(connection.models);
Type.associate(connection.models);

module.exports = connection;
