const mainData = require('../../models/MainData')
const errorHandler = require('../../utils/errorhandler')

module.exports.get = async function (req, res) {
    try {
        const mainData = await mainData.find()
        res.status(200).json(mainData)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req, res) {
    const updated = {
        textLeft: req.body.textLeft,
        textRight: req.body.textRight,
    }

    if (req.file) {
        updated.mainImageSrc = req.file.path
    }

    try {
        const mainData = await mainData.updateOne(
            {},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(mainData)
    } catch (e) {
        errorHandler(res, e)
    }
}
