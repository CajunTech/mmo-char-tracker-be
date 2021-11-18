const User = require('../models').User;
const Character = require('../models').Character;
const Image = require('../models').Image;

const constants = require('../constants');

const getProfile = (req, res) => {
    User.findAll({
        where: {username: req.params.index},
    })
    .then(userProfile => {
      res.json(userProfile);
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
        }

const getCharacters = (req, res) => {
    Character.findAll({
        where: {createdBy: req.params.index},
    }) .then(characters => {
        res.json(characters)
    })
}
const createCharacter = (req, res) => {
    // console.log(req.body)
    Character.create (req.body)
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createImage = (req, res) => {
    // console.log(req.body)
    Image.create (req.body)
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const getImages = (req, res) => {
    Image.findAll({
        where: {imageOwner: req.params.index},
    }) .then(images => {
        res.json(images)
    })
}
module.exports = {
    getProfile,
    createCharacter,
    getCharacters,
    createImage,
    getImages
}