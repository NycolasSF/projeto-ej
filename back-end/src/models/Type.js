const { Model, DataTypes } = require('sequelize');
class Type extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
    },{
      sequelize
    })
  }
  static associate(models){
    this.hasMany(models.Task), {foreignKey: 'type_id'};
  }
}
module.exports = Type;
