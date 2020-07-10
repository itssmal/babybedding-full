const express = require('express')
const controller = require('../../controllers/admin-controllers/auth')
const router = express.Router()


//http://localhost:5000/api/auth/login

router.post('/login', controller.login)

module.exports = router
