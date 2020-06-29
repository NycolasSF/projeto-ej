const { Model, DataTypes } = require('sequelize');
class Task extends Model{
  static init(sequelize){
    super.init({
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      initData: DataTypes.DATE,
      endData: DataTypes.DATE,
    },{
      sequelize
    })
  }
  static associate(models){
    this.belongsTo(models.User, {foreignKey: 'user_id'});
    this.belongsTo(models.Type, {foreignKey: 'type'});
    this.hasMany(models.Phase, {foreignKey: 'task_id'});
  }
}
module.exports = Task;
