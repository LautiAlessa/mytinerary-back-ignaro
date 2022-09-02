const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: { type: String, required: true },
    user: { type: String},
    itinerary: { type: String}
})

let Comment = mongoose.model(
    'comments',
    commentSchema
    //nombre de la coleccion
    //esquema de datos (tabla)
)

module.exports = Comment;