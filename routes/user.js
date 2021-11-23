const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/profile/:index', ctrl.user.getProfile);
router.get('/characters/:index', ctrl.user.getCharacters);
router.get('/images/:index', ctrl.user.getImages);
router.post('/profile/edit/:index', ctrl.user.editProfile);
router.post('/newcharacter', ctrl.user.createCharacter)
router.post('/newimage',ctrl.user.createImage)
router.post('/profile/delete/:index', ctrl.user.deleteProfile)
router.post('/changepassword', ctrl.user.changePassword)

module.exports = router;