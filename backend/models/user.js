const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importe sua configuração do Sequelize

class User extends Model {}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
