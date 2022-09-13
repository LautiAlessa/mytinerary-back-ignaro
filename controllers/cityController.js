/* const { query } = require('express')
const { response } = require('../app')*/
const City = require('../models/City')
const Joi = require('joi')

const validator = Joi.object({
    "city": Joi.string(),
    "country": Joi.string,
    "photo": Joi.string().uri().message('INVALID URL'),
    "population": Joi.number().min(1000).max(100000000),
    "foundation": Joi.date().greater(new Date),
    "description": Joi.string,
})

const cityController = {
    create: async (req, res) => {
        // const { city, country, photo, population, foundation, description } = req.body
        try {
            //validar
            let result = await validator.validate(req.body)

            let city = await new City(req.body).save()
            res.status(201).json({
                message: 'city successfully created',
                success: true,
                id: city._id
            })
        } catch (error) {
            console.log(error);

            res.status(400).json({
                message: error.message,
                success: false
            })
        }
    },

    all: async (req, res) => {
        let cities

        let query = {}
        if (req.query.search) {
            try {
                const { search } = req.query
                let cities = await City.find({ city: { $regex: search } })
                return res.json({ success: true, response: cities })
            } catch (error) {
                return res.status(400).json({ success: false, error: error.message })
            }
        }
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
            res.json({ success: true, response: cities })
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },

    read: async (req, res) => {
        const { id } = req.params
        try {
            let city = await City.findOne({ _id: id })
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
                res.status(406).json({
                    message: 'cant update, city values are invalid',
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