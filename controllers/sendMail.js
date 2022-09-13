const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const { response } = require('express')
const { model } = require('mongoose')
const OAuth2 = google.auth.OAuth2
const {GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER} = process.env

const sendMail = async (mail, code) => {

    const client = new OAuth2(
        process.env.GOOGLE_ID,
        process.env.GOOGLE_SECRET,
        process.env.GOOGLE_URL,
    )

    client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH
    })


    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: {//transport layer security
            rejectUnauthorized: false//para evitar que bloquee el antivirus
        }
    })

    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'MyTinerary account verification',
        html: `
            <div>
                <h1>Hola ${mail} </h1>
                <a href='http://localhost:4000/auth/verify/${code}'>click to verify!</a>
            </div>
        `//codigo html para que se va a renderizar en el cuerpo del mail.
        //en el cuerpo del html debo enviar un link hacia un link que verifique la clave unica de verificación.
        //ese link o endpoint es la que se conectará con el método correspondiente para la verificación de la cuenta.
        //NO OLVIDAT HOSTEAR EL BACK PARA QUE FUNCIONE LA URL DE REDIRECCIONAMIENTO.
    }

    await transport.sendMail(mailOptions, (error, response)=>{
        if(error){
            console.log(error);
        }else {
            console.log('verification e-mail sent');
        }
    })

}

module.exports = sendMail

/* const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const { GOOGLE_REFRESH } = process.env
const OAuth2 = google.auth.OAuth2

const sendMail = (mail, code) => {
    const client = new OAuth2(  //Nueva credencial de cliente
        process.env.GOOGLE_ID,
        process.env.GOOGLE_URL,
        process.env.GOOGLE_SECRET,
    )
    client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH
    })
    const accessToken = client.getAccessToken()
    const transport = nodemailer.createTestAccount({
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_USER,
            type: 'OAuth2',
            clientID: process.env.GOOGLE_ID,
            clienteSecret: process.env.GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { // siglas transport layer security
            rejectedUnauthorized: false, //para que no bloquee el antiviru

        }
    })
    const mailOptions = {
        from: process.envGOOGLE_USER,
        to: mail,
        subject: 'MyTinerary account verification e-mail',
        html: `<div>
                <a href="http://localhost:4000/auth/verify/${code}">Boca yo te amo</>
               </div>`, // se renderizara en el body del mail. contenera link para la verificacion
    }
    transport.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
        } else {
            console.log('verification e-mail sent')
        }
    })
}

module.exports = sendMail */