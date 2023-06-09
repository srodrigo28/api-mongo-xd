const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
// const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskController.create)
router.get('/:id', TaskController.show)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.delete)
router.put('/:id/:done', TaskController.done)
router.get('/filter/all', MacaddressValidation, TaskController.all)

module.exports = router;