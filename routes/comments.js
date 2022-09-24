var express = require('express');
var router = express.Router();

const { create, all, destroy, read, update } = require('../controllers/commentController'); 

router.post('/', create)
router.get('/', all)
router.get('/:id', read)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;