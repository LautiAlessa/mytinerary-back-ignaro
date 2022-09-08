const Comment = require('../models/Comment')

const commentController = {
    create: async (req, res) => {
        // const { name, lastName, photo, mail, password, country } = req.body
        try {
            let comment = await new Comment(req.body).save()
            res.status(201).json({
                message: 'comment successfully created',
                success: true
            })
            if (comment) {

            } else {
                res.status(406).json({
                    message: 'cant create, comment values are invalid',
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: "couldn't create comment",
                success: false
            })
        }
    },

    all: async (req, res) => {
        let comments

        let query = {}
        if (req.query.comment) {
            query.comment = req.query.comment
        }
        if (req.query._id) {
            query._id = req.query._id
        }
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            comments = await Comment.find(query)
            .populate("itinerary", {name:1})
            .populate("user", {name:1, lastName:1})
            res.json({ success: true, response: comments })
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },

    destroy: async (req, res) => {
        const { id } = req.params
        let comment
        try {
            comment = await Comment.findOneAndDelete({ _id: id })
            if (comment) {
                res.status(200).json({
                    message: 'comment removed',
                    response: comment,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'comment not found, couldnt remove',
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

module.exports = commentController