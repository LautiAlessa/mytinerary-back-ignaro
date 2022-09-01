require('dotenv').config()

const cityDB = require('./config/database')

const City = require('./models/City')

City.create({
    city: "Moscow",
    country: "Russia",
    photo: "url",
    population: "1500",
    foundation: "1990-01-01",
    description: "Russia"
})