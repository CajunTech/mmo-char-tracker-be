const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/edit/:id', ctrl.image.editImage);
router.post('/delete/:id', ctrl.image.deleteImage);

module.exports = router;