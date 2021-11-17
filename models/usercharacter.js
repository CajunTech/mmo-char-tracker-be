'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCharacter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserCharacter.init({
    userId: DataTypes.INTEGER,
    characterId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCharacter',
  });
  return UserCharacter;
};