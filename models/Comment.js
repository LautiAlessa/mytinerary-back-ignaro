const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    itinerary: { type: mongoose.Types.ObjectId, ref: 'itineraries' }
})

let Comment = mongoose.model(
    'comments',
    commentSchema
    //nombre de la coleccion
    //esquema de datos (tabla)
)

module.exports = Comment;