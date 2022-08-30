const { response } = require('../app')
const City = require('../models/City')


const cityController = {
    create: async (req, res) => {
        const { city, country, photo, population, fundation } = req.body
        try {
            await new City({ city, country, photo, population, fundation }).save()
            res.status(201).json({
                message: 'city created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "couldn't created city",
                success: false
            })
        }
    },
    read: async (req, res) => {
        const { id } = req.params
        try {
            let city = City.findOne({ _id: id })
            // si city existe retrono un json con los datos
            // si city no existe -> city = {} retorno un json con 404
            if (city) {
                res.status(200).json({
                    message: "you get one city",
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find a city",
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
    }
}

module.export = cityController