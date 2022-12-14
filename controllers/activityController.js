const Activity = require('../models/Activity')

const activityController = {
    create: async (req, res) => {
        // const { name, lastName, photo, mail, password, country } = req.body
        try {
            let activity = await new Activity(req.body).save()
            res.status(201).json({
                message: 'activity successfully created',
                success: true
            })
            if (activity) {

            } else {
                res.status(406).json({
                    message: 'cant create, activity values are invalid',
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: "couldn't create activity",
                success: false
            })
        }
    },

    all: async (req, res) => {
        let activities

        let query = {}
        if (req.query.name) {
            query.name = req.query.name
        }
        if (req.query._id) {
            query._id = req.query._id
        }
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            activities = await Activity.find(query)
            .populate("itinerary", {name:1})
            res.json({ success: true, response: activities })
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },

    update: async (req, res) => {
        const { id } = req.params
        const activity = req.body
        let activityModify
        try {
            activityModify = await Activity.findOneAndUpdate({ _id: id }, activity, { new: true })
            if (activityModify) {
                res.status(200).json({
                    message: "activity modified",
                    response: activityModify,
                    success: true
                })
            } else {
                res.status(406).json({
                    message: 'cant update, activity values are invalid',
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
        let activity
        try {
            activity = await Activity.findOneAndDelete({ _id: id })
            if (activity) {
                res.status(200).json({
                    message: 'activity removed',
                    response: activity,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'activity not found, couldnt remove',
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

module.exports = activityController



