const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    user: { 
        type: mongoose.Types.ObjectId, 
        ref: 'users' 
},
    city: { 
        type: mongoose.Types.ObjectId, 
        ref: 'cities' 
},
    price: { 
        type: Number, 
        required: true
    },
    likes: { 
        type: [], 
        required: true 
    },
    tags: { 
        type: [], 
        required: true 
    },
    duration: { 
        type: Number, 
        required: true
    },
    activities: [{
        type: mongoose.Types.ObjectId,
        ref: 'activities'
    }],
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'comments'
    }] 
})

let Itinerary = mongoose.model(
    'itineraries',
    itinerarySchema
    //nombre de la coleccion
    //esquema de datos (tabla)
)

module.exports = Itinerary;