const mongoose = require('mongoose')

mongoose.connect( //depende de 2 parametros: 1ero link de conexion, 2do objeto con propiedades true
    process.env.MONGO_CONNECTION,
    {
        useUnifiedTopology: true, // Habilita a mongoose a controlar la DB de mongo
        useNewUrlParser: true // Utiliza el analizador de errores de mongoose en lugar de mongo
    }
)
    .then(() => console.log('connected to database succesfully'))
    .catch(error => console.log(error));