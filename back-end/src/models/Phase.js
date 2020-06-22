const { Model, DataTypes } = require('sequelize');
class User extends Model{
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      on_off: DataTypes.BOOLEAN,
    },{
      sequelize
    })
  }
  static associate(models){
    this.belongsTo(models.Task, {foreignKey: 'taskId'});
  }
}
module.exports = User;