const express = require('express')
const router = express.Router()

const ContaController = require('../controller/ContaController')
const ContaValidation = require('../middlewares/ContaValidation')

router.post('/', ContaValidation, ContaController.create)

module.exports = router