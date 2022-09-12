const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true},
    itinerary: { type: mongoose.Types.ObjectId, ref: 'itineraries' }
})

let Activity = mongoose.model(
    'activities',
    activitySchema
    //nombre de la coleccion
    //esquema de datos (tabla)
)

module.exports = Activity;