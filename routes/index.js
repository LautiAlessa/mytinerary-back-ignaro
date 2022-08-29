var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    persons: {
      name: "A",
      age: 50,
      year: 2022
    }
  });
});

router.get('/123', function(req, res, next) {
  res.json([]);
});

/* router.get('/:id', function(req, res, next) {
  res.json(
    {
      if ( req.params.id == 123) {
        res.status(404).json();
        return;
      }
      id : req.params.id
    });
}); */

module.exports = router;
