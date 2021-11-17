const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/profile/:index', ctrl.user.getProfile);
router.put('/profile', ctrl.user.editProfile);
router.post('/newcharacter', ctrl.user.createCharacter)

module.exports = router;