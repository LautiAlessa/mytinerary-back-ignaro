const { Router } = require('express');
var express = require('express');
var router = express.Router();
const passport = require('passport');

const {signUp, verifyMail, signIn, all, read, update, /* signInToken, */ signOut} = require('../controllers/userController')

/* const { create, all, update, destroy} = require('../controllers/userController');  */

// router.post('/', create)
router.get('/', all)
router.get('/', read)
router.post('/signup', signUp)
router.get('/verify/:code', verifyMail)
router.post('/signin', signIn)
// router.get('/token', passport.authenticate('jwt', {session: false}), signInToken)
router.post('/signout', signOut)
router.patch('/editprofile/:id', update)
// router.delete('/:id', destroy)

module.exports = router;


// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;