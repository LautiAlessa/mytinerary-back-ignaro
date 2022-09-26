var express = require('express');
const passport = require('passport');
var router = express.Router();
require('../config/passport')

const { create, all, destroy, read, update } = require('../controllers/commentController'); 

router.post('/', passport.authenticate('jwt', {session: false}), create)
router.get('/', all)
router.get('/:id', read)
router.patch('/:id', passport.authenticate('jwt', {session: false}), update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), destroy)

module.exports = router;