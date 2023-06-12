const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
// const TaskValidation = require('../middlewares/TaskValidation');
// const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/', TaskController.create)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.delete)
router.put('/:id/:done', TaskController.done)

router.get('/:id', TaskController.show)

router.get('/filter/all/:macaddress', TaskController.all)
router.get('/filter/late/:macaddress', TaskController.late)
router.get('/filter/today/:macaddress', TaskController.today)
router.get('/filter/week/:macaddress', TaskController.week)

router.get('/filter/month/:vencimento', TaskController.month)

router.get('/filter/year/:macaddress', TaskController.year)

module.exports = router;