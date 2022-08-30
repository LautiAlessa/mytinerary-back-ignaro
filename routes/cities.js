var express = require('express');
var router = express.Router();

//traerme el método con desestructuracion:

const {create,read} = require('../controllers/cityController') //aca me traigo una prpiedad/metodo del objeto (como en este caso (create)).

//traerme el método con el objeto entero:

// const cityController = require('../controllers/cityController') //aca me traigo todo el objeto
// const createController = cityController.create


/* GET users listing. */

// router.metodo('la ruta', controlador')

// router.post('/', create) 
// router.get('/:id', read) 

module.exports = router;