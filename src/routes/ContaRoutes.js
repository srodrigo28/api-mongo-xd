const express = require('express')
const router = express.Router()

const ContaController = require('../controller/ContaController')
const ContaValidation = require('../middlewares/ContaValidation')

router.post('/', ContaController.create)
router.get('/', ContaController.all)
router.get('/:id', ContaController.allById)
router.delete('/:id', ContaController.delete)

// router.get('/filter/month/:macaddress', TaskController.month)


module.exports = router