const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mainDataSchema = new Schema({
    textLeft: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'At dolore ducimus eos harum ipsum iste molestias mollitia reiciendis sunt voluptatum. ' +
            'Culpa dolorem facilis ipsa minus possimus? Iure natus neque omnis?\n'
    },
    textRight: {
        type: String,
        default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'At dolore ducimus eos harum ipsum iste molestias mollitia reiciendis sunt voluptatum. ' +
            'Culpa dolorem facilis ipsa minus possimus? Iure natus neque omnis?\n'
    },
    mainImageSrc: {
        type: String,
        default: '',
    }
})

module.exports = mongoose.model('mainData', mainDataSchema)
