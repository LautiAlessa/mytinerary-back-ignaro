const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        min: 4,
        max: 100
    },
    country: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
        validate: function (value) {
            if (!value.startsWith('http')) {
                throw new Error('La URL debe comenzar con http')
            }
        }
    },
    population: {
        type: Number,
        min: 1000,
        max: 100000000,
        required: true,
    },
    foundation: {
        type: Date,
        required: true
    },
    description: {
        type: String
    }
})

let City = mongoose.model(
    'cities',
    citySchema
    //nombre de la coleccion
    //esquema de datos (tabla)
)

module.exports = City;