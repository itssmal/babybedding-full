const express = require('express')
const controller = require('../../controllers/client-controllers/order')
const router = express.Router()

router.get('/:id', controller.getAll)
router.post('/', controller.create)

module.exports = router
