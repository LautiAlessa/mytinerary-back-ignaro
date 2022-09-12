const User = require ('../models/User')

const userController = {
    create: async (req, res) => {
        // const { name, lastName, photo, mail, password, country } = req.body
        try {
            await new User(req.body).save()
            res.status(201).json({
                message: 'user successfully created',
                success: true
            })
            if (user) {

            } else {
                res.status(406).json({
                    message: 'cant create, user values are invalid',
                    success: false
                })
            }
        } catch (error) {
            res.status(400).json({
                message: "couldn't create user",
                success: false
            })
        }
    },

    all: async (req, res) => {
        let users

        let query = {}
        if (req.query.user) {
            query.user = req.query.user
        }
        if (req.query._id) {
            query._id = req.query._id
        }

        try {
            users = await User.find(query)
            res.json({ success: true, response: users })
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },

    update: async (req, res) => {
        const { id } = req.params
        const user = req.body
        let userModify
        try {
            userModify = await User.findOneAndUpdate({ _id: id }, user, { new: true })
            if (userModify) {
                res.status(200).json({
                    message: "user modified",
                    response: userModify,
                    success: true
                })
            } else {
                res.status(406).json({
                    message: 'cant update, user values are invalid',
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
        let user
        try {
            user = await User.findOneAndDelete({ _id: id })
            if (user) {
                res.status(200).json({
                    message: 'user removed',
                    response: user,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'user not found, couldnt remove',
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

module.exports = userController



