const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    user: { type: String},
    city: { type: String},
    price: { type: Number, required: true},
    likes: { type: [], required: true },
    tags: { type: [], required: true },
    duration: { type: Number, required: true}
})

let Itinerary = mongoose.model(
    'itineraries',
    itinerarySchema
    //nombre de la coleccion
    //esquema de datos (tabla)
)

module.exports = Itinerary;