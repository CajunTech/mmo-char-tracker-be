require('dotenv').config();
const Character = require('../models').Character;

const constants = require('../constants');

const editCharacter = (req, res) => {
	Character.update(req.body, {
		where: { id: req.params.id },
		returning: true
	})
};


module.exports = {
	editCharacter
};