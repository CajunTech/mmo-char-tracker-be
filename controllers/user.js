const User = require('../models').User;
const Character = require('../models').Character;

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

module.exports = {
    getProfile,
    createCharacter,
    getCharacters
}