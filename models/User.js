const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    photo: { 
        type: String, 
        required: true,
        validate: function (value) {
            if (!value.startsWith('http')) {
                throw new Error('La URL debe comenzar con http')
            }
        }
    },
    email: { 
        type: String, 
        required: true
    },
    password: [{ 
        type: String, 
        required: true 
    }], //tieme que ser un array para alojar todas las contraseñas
    role : { 
        type: String, 
        required: true
    }, //como usuario comun vamos a tener que asignarle el rol "user" y hay que ver la forma de crear 
    country: { 
        type: String, 
        required: true 
    },
    from: [{
        type: String, 
        required:true
    }], //array con todas las formas en las que se registro el usuario (formulario, red social, etc)
    logged: {
        type: Boolean, 
        required:true
    }, //por defecto como el usuario no esta logueado va a estar en false y cuando se loguea => true
    verified: {
        type: Boolean, 
        required:true
    }, //por defecto como el usuario no esta verificado va a estar en false y cuando se verifique => true
    code: {
        type: String, 
        required: true
    } //codigo de verificacion del usuario que "se enviará" por mail
})


let User = mongoose.model(
    'users',
    userSchema
    //nombre de la coleccion
    //esquema de datos (tabla)
)

module.exports = User;

