const { Model, DataTypes } = require('sequelize');
class Task extends Model{
  static init(sequelize){
    super.init({
      Name: DataTypes.STRING,
    },{
      sequelize
    })
  }
}
module.exports = Task;
