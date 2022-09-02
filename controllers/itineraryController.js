const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async (req, res) => {
        const { name, lastName, photo, mail, password, country } = req.body
        try {
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'itinerary successfully created',
                success: true
            })
            if (itinerary) {

            } else {

            }
        } catch (error) {
            res.status(400).json({
                message: "couldn't create itinerary",
                success: false
            })
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        const itinerary = req.body
        let itineraryModify
        try {
            itineraryModify = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
            if (itineraryModify) {
                res.status(200).json({
                    message: "itinerary modified",
                    response: itineraryModify,
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
        let itinerary
        try {
            itinerary = await Itinerary.findOneAndDelete({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    message: 'itinerary removed',
                    response: itinerary,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'itinerary not found, couldnt remove',
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

module.exports = itineraryController



