var express = require('express');
var router = express.Router();
const cityRouter = require('./cities') 
const usersRouter = require('./users')
const itineraryRouter = require('./itinerary')
const activitiesRouter = require('./activities')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyTinerary'});
});

router.use('/cities', cityRouter)
router.use('/itineraries', itineraryRouter)
router.use('/users', usersRouter)
router.use('/activities', activitiesRouter)

module.exports = router;
