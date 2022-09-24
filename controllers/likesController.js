const Itinerary = require("../models/Itinerary")

const likesControllers = {

    like: async (req, res) => {
        try {
            const { itineraryId, userId } = req.body

            let result = await Itinerary.findOneAndUpdate(
                { _id: itineraryId },
                { $addToSet: { likes: userId } },
                { new: true }
            )

            if (!result) throw new Error(result)

            res.status(200).json({
                success: true,
                response: "Liked"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },

    dislike: async (req, res) => {
        try {
            const { itineraryId, userId } = req.body

            let result = await Itinerary.findOneAndUpdate(
                { _id: itineraryId },
                { $pull: { likes: userId } },
                { new: true }
            )

            if (!result) throw new Error(result)

            res.status(200).json({
                success: true,
                response: "Disliked"
            })

        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = likesControllers