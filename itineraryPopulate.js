require('dotenv').config()

const itineraryDB = require('./config/database')

const Itinerary = require('./models/Itinerary')

Itinerary.create({
    name: "ras",
    user: "sar",
    city: "rus",
    price: "522",
    likes: "",
    tags: "",
    duration: "500"
})