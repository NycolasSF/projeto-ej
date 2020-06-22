const { Model, DataTypes } = require('sequelize');
class User extends Model{
  static init(sequelize){
    super.init({
      Title: DataTypes.STRING,
      On_off: DataTypes.BOOLEAN,
    },{
      sequelize
    })
  }
  static associate(models){
    this.belongsTo(models.Task, {foreignKey: 'TaskId'});
  }
}
module.exports = User;
