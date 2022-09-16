// - logica del metodo de resgistro de usuario (de formulario O red social)
//     - consultar si el mail existe en la base de datos
//     - si el mail no existe => ejemplo ===> from: []
//         - si el usuario se crea con un formulario 
//         - si el usuario se crea con redes sociales
//     - si el mail existe => ejemplo ===> from: ['form', 'google', 'linkedin'] no debe permitir el re-registro y dar aviso
//          - si el usuario ya tiene cuenta por este medio (existe dentro del array del from) no permito el re-registro
//                ejemplo => el usuario quiere registrarse por google pero ya hizo previamente el registro
//                from: ['google'] y NO tengo que agregar google de nuevo, es decir no perimto ==> form: ['google', 'google']
//                el usuario se registró con anterioridad por el formulario y ahora quiere volver a registrarse con el formulario
//          - si el usuario no tiene cuenta por este medio (no existe dentro del array del from) permito el registro
//               ejemplo => el usuario quiere registrarse por facebook perio ya hizo previamente el registro com google
//               from: ['google'] y SI tengo que agregar un nuevo "from", es decir ==> form: ['google', 'facebook']

//              from y pass deben ser arrays: por que?
//              from : ['formulario']    ===> pass = 'Hola1234' (hasheado)
//              from : ['formulario', 'google'] ===> pass = 'chau12345U' (hasheado) si reemplaxo la contraseña del formulario por la nueva de google
//              cuando el usuario quier volver a ingresar con el formulario NO VA A PODER
//              por eso la contraseña tambien tiene que ser un array
//              from : ['formulario']    ===> pass = ['Hola1234'] (hasheado)
//              from : ['formulario', 'google'] ===> pass = ['Hola1234', 'chau12345U'] (hasheado)
//              from : ['formulario', 'google', 'facebook'] ===> pass = ['Hola1234', 'chau12345U', 'lauti123'] (hasheado)

//              MODIFICO EL MODELO!!1


const User = require('../models/User')
const crypto = require('crypto') // recurso propio de nodeJS para generar códigos aleatorios
const bcryptjs = require('bcryptjs') // ecurso propio de nodeJS para hashear contraseñasS
const sendMail = require('./sendMail')
const { find, findOne } = require('../models/User')

const userController = {

    signUp: async (req, res) => {
        let {
            name,
            lastName,
            country,
            photo,
            email,
            password,
            role, //tiene que venir del frontend para usar este metodo para ambos casos (user y admin)
            from, //tiene que venir del frontend para avisarle al metodo desde donde se crea el usuario
        } = req.body
        try {
            let user = await User.findOne({ email })
            if (!user) {
                let logged = false
                let verified = false
                let code = crypto //invoco el generador de códigos
                    .randomBytes(15) //le aplico el método para avisarle que tiene que tener 15 dígitos
                    .toString('hex') //le aplico el método para avisarle que tiene que tiene que ser hexagecimal
                //code: clave unica de usuario o unique string
                if (from === 'form') {//si la data viene del formulario de registro
                    password = bcryptjs.hashSync(password, 10) //utilizamos el metodo hashSync que requiere 2 parámetros
                    user = await new User({ name, lastName, country, photo, email, password: [password], role, from: [from], logged, verified, code }).save() //modifico pass con el array
                    //aca hay que incorporar la funcion para el envío del mail de verificación
                    sendMail(email, code)
                    res.status(201).json({
                        message: "user signed up",
                        success: true
                    })
                } else {//si viene de redes sociales
                    password = bcryptjs.hashSync(password, 10) //utilizamos el metodo hashSync que requiere 2 parámetros
                    verified = true //lo paso a true porque se supone que ya esta verificado cuando se logue en la red social
                    user = await new User({ name, lastName, country, photo, email, password: [password], role, from: [from], logged, verified, code }).save()
                    //no hace falta enviar el mail de verificación
                    res.status(201).json({
                        message: "user signed up from" + from,
                        success: true
                    })
                }
            } else {//si el usuario SI existe
                if (user.from.includes(from)) { //si la prpiedad from del usuario (que es un array) incluye el valor from 
                    //user.from = ['google','facebook'] incluye from='google'
                    res.status(409).json({ // 200 a confirmar/estudiar => tiene exito buscando un usario
                        message: "user already exists",
                        success: false //porque no tiene exito en la creación del usuario
                    })
                } else { //user.from = ['google','facebook'] incluye from='linkedin'
                    user.from.push(from) // vinculo la nueva forma de registro al usuario encontrado pusheando el from adentro del array
                    //user.from = ['google','facebook','linkedin']
                    user.verified = true// si el usuario ya tiene registros previos significa que ya se verifico en algun momento
                    //si ya se verifico en algun momento me aseguro que ya este verificado definiendo user.verified=true
                    user.password.push[bcryptjs.hashSync(password, 10)] //hasheo la nueva contraseña del usuario y la pusheo al array de contraseñas
                    await user.save()
                    res.status(201).json({
                        message: "user signed up from" + from,
                        success: true
                    })
                }
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "couldn't signed up",
                success: false
            })
        }
    },

    //el código unico y aleatorio generado en el controlador de signup
    //se pasa por params a este otro metodo para poder verificar la cuenta
    //luego de requerirlo lo comparo con los perfiles ya creados. (lo busco en la base de datos)
    //si encuentra el usuario cambio el verified de false a true.
    //si no lo encuentra avisar que el mail a verificar no tiene cuenta.
    verifyMail: async (req, res) => {
        const { code } = req.params
        try {
            let user = await User.findOne({ code: code })
            if (user) {
                user.verified = true //cambio la propiedad
                await user.save() //guardo el cambio en la base de datos
                res.redirect(301, 'http://www.google.com')
            } else {
                res.status(404).json({
                    message: "email has not account yet",
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "couldn't verify account",
                success: false
            })
        }
    },

    signIn: async (req, res) => {
        const { email, password, from } = req.body
        try {
            const user = await User.findOne({ email })
            if (!user) { //si usuario NO existe 
                res.status(404).json({
                    success: false,
                    message: "User doesn't exist, please signup"
                })
            } else if (user.verified) {// si usuario SI existe y esta verificado
                const checkPass = user.password.filter(passwordElement => bcryptjs.compareSync(password, passwordElement))
                if (from === 'form') { // si el usuario intenta ingresar por form
                    if (checkPass.length > 0) { //si contraseña coincide 
                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            lastName: user.lastName,
                            country: user.country,
                            email: user.email,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            success: true,
                            response: { user: loginUser },
                            message: 'Welcome' + user.name
                        })
                    } else { // si contraseña no coincide
                        res.status(401).json({
                            success: false,
                            message: 'Username or password incorrect'
                        })
                    }
                } else { //si el usuario intenta ingresar por redes sociales
                    if (checkPass.length > 0) { //si contraseña coincide 
                        const loginUser = {
                            id: user._id,
                            name: user.name,
                            lastName: user.lastName,
                            country: user.country,
                            email: user.email,
                            role: user.role,
                            from: user.from,
                            photo: user.photo
                        }
                        user.logged = true
                        await user.save()
                        res.status(200).json({
                            success: true,
                            response: { user: loginUser },
                            message: 'Welcome ' + user.name
                        })
                    } else { // si contraseña no coincide
                        res.status(401).json({
                            success: false,
                            message: 'Invalid credentials'
                        })
                    }
                }
            } else {// Si usuario existe pero no esta verificado
                res.status(403).json({
                    success: false,
                    message: 'please, verify your email account and try again'
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: 'Sign In ERROR, try again later'
            })
        }
    },
    signOut: async (req, res) => {
        const {email} = req.body
        try {
            let user = await User.findOne({email:email})
                if (user){
                    user.logged = false
                    await user.save()
                    res.status(200).json({
                        success: true,
                        response: user.logged,
                        message: 'Signed Out!'
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: 'User not found'
                    })
                }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: 'Failed sign out'
            })
        }
    }, //findOneAndUpdate y cambiar logged de true a false

    all: async (req, res) => {
        let users
        let query = {}
        if (req.query._id) {
            query._id = req.query._id
        }

        try {
            users = await User.find(query)
            res.json({ success: true, response: users })
        } catch (error) {
            console.log(error)
            res.status(500).json()
        }
    },

    read: async (req, res) => {
        const { id } = req.params
        try {
            let user = await User.findOne({ _id: id })
            if (user) {
                res.status(200).json({
                    message: "you got one user",
                    response: user,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find that user",
                    success: false
                })
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

}
module.exports = userController

//     update: async (req, res) => {
//         const { id } = req.params
//         const user = req.body
//         let userModify
//         try {
//             userModify = await User.findOneAndUpdate({ _id: id }, user, { new: true })
//             if (userModify) {
//                 res.status(200).json({
//                     message: "user modified",
//                     response: userModify,
//                     success: true
//                 })
//             } else {
//                 res.status(406).json({
//                     message: 'cant update, user values are invalid',
//                     success: false
//                 })
//             }

//         } catch (error) {
//             console.log(error);
//             res.status(400).json({
//                 message: "error",
//                 success: false
//             })
//         }
//     },

//     destroy: async (req, res) => {
//         const { id } = req.params
//         let user
//         try {
//             user = await User.findOneAndDelete({ _id: id })
//             if (user) {
//                 res.status(200).json({
//                     message: 'user removed',
//                     response: user,
//                     success: true
//                 })
//             } else {
//                 res.status(404).json({
//                     message: 'user not found, couldnt remove',
//                     success: false
//                 })
//             }
//         } catch (error) {
//             console.log(error);
//             res.status(400).json({
//                 message: "error",
//                 success: false
//             })
//         }
//     },
// }