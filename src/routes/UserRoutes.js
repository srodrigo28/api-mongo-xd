const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const UserValidation = require('../middlewares/UserValidation');
const { route } = require('./TaskRoutes');

router.post('/', UserValidation, UserController.create)

router.get('/', UserController.all)
router.put('/:id', UserController.update)
router.get('/:id', UserController.allById)
router.delete('/:id', UserController.delete)


module.exports = router;