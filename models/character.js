'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Character.belongsTo(models.User, {
			// 	through: 'UserCharacter',
			// 	foreignKey: 'characterId',
			// 	otherKey: 'userId',
			// });
    }
  };
  Character.init({
    createdBy:DataTypes.STRING,
    characterName: DataTypes.STRING,
    server: DataTypes.STRING,
    faction: DataTypes.STRING,
    characterBio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};