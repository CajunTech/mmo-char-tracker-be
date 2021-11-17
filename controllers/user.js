const User = require('../models').User;
const Character = require('../models').Character;
const Post = require('../models').Post;

const constants = require('../constants');

const getProfile = (req, res) => {
    // console.log(req.params.index)
    User.findAll({
        where: {username: req.params.index},
            include: [
                {
                model: Character
                },
            ],
    })
    .then(userProfile => {
      res.json(userProfile);
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
        }


const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.user.id
        },
        returning: true
    })
    .then(() => {
        User.findByPk(req.user.id, {
            include: [
                {
                    model: City,
                    attributes: ['id', 'name', 'state', 'img', 'country']
                }
            ],
            attributes: ['id', 'name', 'username', 'img', 'createdAt', 'email']
        })
        .then(userProfile => {
            res.status(constants.SUCCESS).json(userProfile)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
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
    editProfile,
    createCharacter
}