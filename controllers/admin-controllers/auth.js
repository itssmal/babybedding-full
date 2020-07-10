const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

const User = require('../../models/User')

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})


    if (candidate) {
        if (req.body.password === candidate.password) {
            // gen token, passwords match
            const token = jwt.sign({
                email: req.body.email,
                userId: candidate._id,
            }, keys.jwt, {expiresIn: 3600})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            // passwords didnt match
            res.status(401).json({
                message: 'Неправильний пароль'
            })
        }
    } else {
        res.status(404).json({
            message: 'Користувача з такою поштовою адресою не існує'
        })
    }
}
