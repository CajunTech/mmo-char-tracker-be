require('dotenv').config();

const User = require('../models').User;
const constants = require('../constants');

const bcrypt = require('bcryptjs');

const signup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if(err){
            res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if(err){
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            }
            req.body.password = hashedPwd;

            User.create(req.body)
                    res.status(constants.SUCCESS).json({
                    "user": newUser
                })
            .catch(err => {
                res.status(constants.BAD_REQUEST).send(`ERROR: ${err}`);
                console.log("failing here")
                console.log(hashedPwd);
            })
        })
    })
}

const login = (req, res) => {
    console.log("=============", req.body)
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(foundUser){
            bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
                if(match){
                      res.status(constants.SUCCESS).json
                    ({
                        "user": foundUser.username
                    });
                } else {
                    res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Password`);
                }
            })
        }
        else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Password`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    signup,
    login,

}
