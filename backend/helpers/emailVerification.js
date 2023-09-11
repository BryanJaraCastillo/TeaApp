//emailVerification helpers, ocupando .env y connectionDB.js para verificar el email del usuario
require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (user) => {
    //configuracion de transporte 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
    });

    //generar url de confirmacion 
    const confirmationUrl = `http://localhost:3000/confirm-email?token=${user.emailToken}`;

    //configurar opciones de correo 
    const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Confirma tu correo',
        html: `<h1>Gracias por registrarte</h1>
        <p>Por favor confirma tu correo haciendo click en el siguiente enlace</p>
        <a href="${confirmationUrl}">${confirmationUrl}</a>`
    };


    //enviar correo
    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado');
    } catch (error) {
        console.log(error);
    }

};

module.exports = sendEmail;