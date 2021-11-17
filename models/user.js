'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Character, {
				through: 'UserCharacter',
				foreignKey: 'userId',
				otherKey: 'characterId',
			});
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    userBio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};