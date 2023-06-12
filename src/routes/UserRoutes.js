const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const UserValidation = require('../middlewares/UserValidation');
const { route } = require('./TaskRoutes');

router.post('/', UserValidation, UserController.create)
router.get('/', UserController.all)

module.exports = router;