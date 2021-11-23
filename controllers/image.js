require('dotenv').config();
const Image = require('../models').Image;

const editImage = (req, res) => {
	Image.update(req.body, {
		where: { id: req.params.id },
		returning: true,
	});
};

const deleteImage = (req, res) => {
	Image.destroy({ where: { id: req.params.id } });
};

module.exports = {
	editImage,
	deleteImage,
};
