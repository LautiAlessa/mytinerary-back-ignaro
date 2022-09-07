var express = require('express');
var router = express.Router();

const { create, all, update, destroy } = require('../controllers/itineraryController'); 

router.post('/', create)
router.get('/', all)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;