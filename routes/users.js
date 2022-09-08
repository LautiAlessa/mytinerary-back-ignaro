var express = require('express');
var router = express.Router();

const { create, all, update, destroy } = require('../controllers/userController'); 

router.post('/', create)
router.get('/', all)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;


// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;