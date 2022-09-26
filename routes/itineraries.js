var express = require('express');
const passport = require('passport');
var router = express.Router();
require('../config/passport')

const { create, likesDislikes, all, update, destroy } = require('../controllers/itineraryController'); 

router.post('/', passport.authenticate('jwt', {session:false}), create)
router.patch('/likes/:id', passport.authenticate('jwt', {session: false}), likesDislikes)
router.get('/', all)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;