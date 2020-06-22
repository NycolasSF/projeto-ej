const { Model, DataTypes } = require('sequelize');
class User extends Model{
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      on_off: DataTypes.BOOLEAN,
      avatar: DataTypes.STRING,
    },{
      sequelize
    })
  }
}
module.exports = User;
