const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/edit/:id', ctrl.character.editCharacter);
router.post('/delete/:id', ctrl.character.deleteCharacter);

module.exports = router;