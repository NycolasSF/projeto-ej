const { Model, DataTypes } = require('sequelize');
class User extends Model{
  static init(sequelize){
    super.init({
      Name: DataTypes.STRING,
      Email: DataTypes.STRING,
      Password: DataTypes.STRING,
      On_off: DataTypes.BOOLEAN,
      Avatar: DataTypes.STRING,
    },{
      sequelize
    })
  }
}
module.exports = User;
