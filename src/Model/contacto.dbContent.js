const mongoose = require('mongoose')
const {Schema, model} = mongoose

const contactoSchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: [
        {
            type: Number,
            type: Number
        }
    ]
})

module.exports = model('contacto', contactoSchema)