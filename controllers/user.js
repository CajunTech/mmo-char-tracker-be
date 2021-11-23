const User = require('../models').User;
const Character = require('../models').Character;
const Image = require('../models').Image;
const bcrypt = require('bcryptjs');

const constants = require('../constants');

const getProfile = (req, res) => {
	User.findAll({
		where: { username: req.params.index },
	})
		.then((userProfile) => {
			res.json(userProfile);
		})
		.catch((err) => {
			res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
		});
};

const getCharacters = (req, res) => {
	Character.findAll({
		where: { createdBy: req.params.index },
	}).then((characters) => {
		res.json(characters);
	});
};
const createCharacter = (req, res) => {
	Character.create(req.body).catch((err) => {
		res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
	});
};

const createImage = (req, res) => {
	Image.create(req.body).catch((err) => {
		res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
	});
};
const getImages = (req, res) => {
	Image.findAll({
		where: { imageOwner: req.params.index },
	}).then((images) => {
		res.json(images);
	});
};
const editProfile = (req, res) => {
	User.update(req.body, {
		where: { username: req.params.index },
	})
		.then(() => {
			res.json(`/profile`);
		})
		.catch((err) => {
			res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
		});
};

const deleteProfile = (req, res) => {
	User.destroy({ where: { username: req.params.index } });
};

const changePassword = (req, res) => {
	User.findOne({ where: { username: req.body.username } }).then((user) => {
		bcrypt.genSalt(10, (err, salt) => {
			if (err) return res.status(500).json(err);
			bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
				if (err) return res.status(500).json(err);
				user.update({ password: hashedPwd }).then(() => {
				});
			});
		});
	});
};

module.exports = {
	getProfile,
	createCharacter,
	getCharacters,
	createImage,
	getImages,
	editProfile,
	deleteProfile,
	changePassword,
};
