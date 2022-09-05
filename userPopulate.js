require('dotenv').config()

const userDB = require('./config/database')

const User = require('./models/User')

User.create({
    name: "Vlad",
    lastName: "Ruski",
    photo: "url",
    mail: "kamchatka@gmail.com",
    password: "1234",
    country: "Russia"
})