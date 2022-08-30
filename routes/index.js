var express = require('express');
var router = express.Router();
const cityRouter = require('./cities') 
const userEvents = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Tinerary'});
});

router.use('/cities',cityRouter)
router.use('/users',userEvents)

module.exports = router;
