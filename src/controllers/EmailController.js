require('dotenv').config();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = {
    async enviaMail(request, response) {
        const { name, email, phone, msgm } = request.body;

        let transporter = nodemailer.createTransport(smtpTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        }));

        transporter.sendMail({
            from: `M&M Advocacia <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `Olá, eu sou ${name}`,
            html: `Meu telefone: ${phone}<br/>Meu e-mail: ${email}<br/>Mensagem: ${msgm}`,
        }).then(message => {
            alert("Mensagem enviada!", message);
        }).catch(err => {
            alert(err);
        });
        
        return response.json();
    }
}