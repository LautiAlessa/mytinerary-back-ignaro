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

    const transtport = nodemailer.createTransport({
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
        subject: 'verify mytinerary account',
        html: `
            <div>
                <h1>Hola ${mail} </h1>
                <a href='http://localhost:4000/users/verify/${code}'>click to verify!</a>
            </div>
        `//codigo html para que se va a renderizar en el cuerpo del mail.
        //en el cuerpo del html debo enviar un link hacia un link que verifique la clave unica de verificación.
        //ese link o endpoint es la que se conectará con el método correspondiente para la verificación de la cuenta.
        //NO OLVIDAT HOSTEAR EL BACK PARA QUE FUNCIONE LA URL DE REDIRECCIONAMIENTO.
    }

    await transtport.sendMail(mailOptions, (error, response)=>{
        if(error){
            console.log(error);
        }else {
            console.log('ok');
        }
    })

}

module.exports = sendMail