/* const { query } = require('express')
const { response } = require('../app')
 */const City = require('../models/City')


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
        const {id} = req.params
        try {
            let city = await City.findOne({_id:id})
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
        const { id } = req.params
        const city = req.body
        let cityModify
        try {
            cityModify = await City.findOneAndUpdate({ _id: id }, city, { new: true })
            if (cityModify) {
                res.status(200).json({
                    message: "city modified",
                    response: cityModify,
                    success: true
            })
        } else {
            
        }

        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params
        let city
        try {
            city = await City.findOneAndDelete({ _id: id })
            if (city) {
                res.status(200).json({
                    message: 'city removed',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'city not found, couldnt remove',
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
}

module.exports = cityController