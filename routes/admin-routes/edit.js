const express = require('express')
const passport = require('passport')
const upload = require('../../middleware/upload')
const controller = require('../../controllers/admin-controllers/edit')
const router = express.Router()


router.get('/', passport.authenticate('jwt', {session: false}), controller.get)
router.patch('/', passport.authenticate('jwt', {session: false}), upload.single('mainImageSrc'), controller.update)

module.exports = router
