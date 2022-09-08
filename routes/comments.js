var express = require('express');
var router = express.Router();

const { create, all, destroy } = require('../controllers/commentController'); 

router.post('/', create)
router.get('/', all)
router.delete('/:id', destroy)

module.exports = router;