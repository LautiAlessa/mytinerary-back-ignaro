const Comment = require('../models/Comment')
const User = require('../models/User')
const Itinerary = require('../models/Itinerary')

const commentController = {
    create: async (req, res) => {
        const {id, comment, itineraryId} = req.body
        try {
            let user = await User.findById(id)
            let itinerary = await Itinerary.findById(itineraryId)
            // console.log(user)
            let newComment = await new Comment({comment, avatar: user.photo, name: user.name, lastName: user.lastName}).save()
            itinerary.comments = itinerary.comments.concat(newComment)
            await itinerary.save()
            // console.log(newComment)
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
            console.log(error)
            res.status(400).json({
                message: "couldn't create comment",
                success: false
            })
        }
    },

    all: async (req, res) => {
        let comments

        let query = {}
        if (req.query._id) {
            query._id = req.query._id
        }
        if (req.query.user) {
            query.user = req.query.user // con userID
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
    
    read: async (req, res) => {
        const { id } = req.params
        try {
            let comment = await Comment.findOne({ _id: id })
            if (comment) {
                res.status(200).json({
                    message: "you got one comment",
                    response: comment,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find that comment",
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
        const comment = req.body
        let commentModify
        try {
            commentModify = await Comment.findOneAndUpdate({ _id: id }, comment, { new: true })
            if (commentModify) {
                res.status(200).json({
                    message: "comment modified",
                    response: commentModify,
                    success: true
                })
            } else {
                res.status(406).json({
                    message: 'cant update, comment values are invalid',
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
