require('dotenv').config();
const Character = require('../models').Character;

const constants = require('../constants');

const editCharacter = (req, res) => {
	Character.update(req.body, {
		where: { id: req.params.id },
		returning: true
	})
};

const deleteCharacter = (req, res) => {
	Character.destroy({ where: { id: req.params.id } })
};

module.exports = {
	editCharacter,
	deleteCharacter
};