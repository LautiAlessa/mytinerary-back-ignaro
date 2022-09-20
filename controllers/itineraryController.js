const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async (req, res) => {
        // const { name, lastName, photo, mail, password, country } = req.body
        try {
            let itinerary = await new Itinerary(req.body).save()
            res.status(201).json({
                message: 'itinerary successfully created',
                success: true
            })
            if (itinerary) {

            } else {
                res.status(406).json({
                    message: 'cant create, itinerary values are invalid',
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: "couldn't create itinerary",
                success: false
            })
        }
    },

    likesDislikes: async(req, res) => {
        let { userId } = req.user
        let { itineraryId } = req.body
        try{
            // let itinerary = await Itinerary.findOne({_id:itineraryId})
            let itinerary = await Itinerary.findOne({_id:userId})
            if (itinerary && itinerary.likes.includes(id)) {
                // itinerary.likes.pull(id)
                // await itinerary.save()
                await Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:userId}}, {new: true})
                res.status(200).json({
    
                })
            } else if (!itinerary.likes.includes(id)) {
                // itinerary.likes.push(id)
                // await itinerary.save()
                await Itinerary.findOneAndUpdate({_id:id}, {$pull:{likes:userId}}, {new: true})
            } else {
    
            }
        } catch {
            console.log(error)
            res.json({
                message:'error',
                success: false
            })
        }
    },

    all: async (req, res) => {
        let itineraries

        let query = {}
        if (req.query._id) {
            query._id = req.query._id
        }
        if (req.query.city) {
            query.city = req.query.city
        }
        if (req.query.user) {
            query.user = req.query.user
        }
        try {
            itineraries = await Itinerary.find(query)
            .populate("city", {city:1, country:1})
            .populate("user", {name:1, lastName:1, photo:1})
            .populate("activities")
            .populate("comments")
            res.json({ success: true, response: itineraries })
        } catch (error) {
            console.log(error)
            res.status(500).json()
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
                res.status(406).json({
                    message: 'cant update, itinerary values are invalid',
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



