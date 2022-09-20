var express = require('express');
const passport = require('passport');
var router = express.Router();

const { create, likesDislikes, all, update, destroy } = require('../controllers/itineraryController'); 

router.post('/', create)
router.patch('/likes/', passport.authenticate('jwt', {session: false}), likesDislikes)
router.get('/', all)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;