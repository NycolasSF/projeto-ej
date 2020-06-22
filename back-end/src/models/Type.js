const { Model, DataTypes } = require('sequelize');
class Task extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
    },{
      sequelize
    })
  }
}
module.exports = Task;
