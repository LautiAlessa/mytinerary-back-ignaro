var express = require('express');
const passport = require('passport');
var router = express.Router();
require('../config/passport')

const { like, dislike} = require('../controllers/likesController'); 

router.post('/like', passport.authenticate('jwt', {session: false}), like)
router.post('/dislike', passport.authenticate('jwt', {session: false}), dislike)

module.exports = router;