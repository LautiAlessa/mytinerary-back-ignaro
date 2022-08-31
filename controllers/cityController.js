const { query } = require('express')
const { response } = require('../app')
const City = require('../models/City')


const cityController = {
    create: async (req, res) => {
        const { city, country, photo, population, foundation, description } = req.body
        try {
            await new City(req.body).save()
            res.status(201).json({
                message: 'city successfully created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "couldn't create city",
                success: false
            })
        }
    },

    all: async (req, res) => {
        let cities
        console.log(req.query)

        let query = {}
        if (req.query.country) {
            query.country = req.query.country
        }
        if (req.query.city) {
            query.city = req.query.city
        }
        if (req.query._id) {
            query._id = req.query._id
        }

        try {
            cities = await City.find(query)
            res.json(cities)
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },

    read: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOne({ _id : id })
            // si city existe retrono un json con los datos
            // si city no existe -> city = {} retorno un json con 404
            if (city) {
                res.status(200).json({
                    message: "you got one city",
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find that city",
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    update: async (req, res) => {
        try {

        } catch (error) {

        }
    },

    destroy: async (req, res) => {
        try {

        } catch (error) {

        }
    },
}

module.exports = cityController