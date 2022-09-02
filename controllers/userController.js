const User = require ('../models/User')

const userController = {
    create: async (req, res) => {
        const { name, lastName, photo, mail, password, country } = req.body
        try {
            await new User(req.body).save()
            res.status(201).json({
                message: 'user successfully created',
                success: true
            })
            // if (user) {

            // } else {

            // }
        } catch (error) {
            res.status(400).json({
                message: "couldn't create user",
                success: false
            })
        }
    },
}

module.exports = userController



