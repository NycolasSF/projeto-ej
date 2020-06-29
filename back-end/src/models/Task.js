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
    this.belongsTo(models.User, {foreignKey: 'userId'});
    this.belongsTo(models.Type, {foreignKey: 'type'});
    this.hasMany(models.Phase, {foreignKey: 'taskId'});
  }
}
module.exports = Task;
