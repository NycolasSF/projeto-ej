const { Model, DataTypes } = require('sequelize');
class User extends Model{
  static init(sequelize){
    super.init({
      Title: DataTypes.STRING,
      Image: DataTypes.STRING,
      InitData: DataTypes.DATE,
      EndData: DataTypes.DATE,
    },{
      sequelize
    })
  }
  static associate(models){
    this.belongsTo(models.User, {foreignKey: 'UserId'});
  }
}
module.exports = User;
