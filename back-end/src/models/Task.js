const { Model, DataTypes } = require('sequelize');
class User extends Model{
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
  }
}
module.exports = User;
