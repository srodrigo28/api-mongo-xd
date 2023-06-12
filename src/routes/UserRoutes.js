const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const UserValidation = require('../middlewares/UserValidation');
const { route } = require('./TaskRoutes');

router.post('/', UserValidation, UserController.create)
router.delete('/:id', UserController.delete)
router.get('/', UserController.all)

// router.get('/filter/week/:macaddress', TaskController.week)
// router.get('/filter/month/:macaddress', TaskController.month)

module.exports = router;