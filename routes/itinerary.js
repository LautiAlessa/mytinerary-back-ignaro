var express = require('express');
const { update, destroy } = require('../controllers/cityController');
var router = express.Router();

const { create } = require('../controllers/itineraryController'); 

router.post('/itineraries', create)
router.patch('/itineraries/:id', update)
router.delete('/itinerary/:id', destroy)

module.exports = router;