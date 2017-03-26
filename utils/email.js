module.exports = function(app) {
    const nodemailer = require('nodemailer');

    return {
        send: function(event, buyer, ticketId) {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'chicodepaulaeventos@gmail.com',
                    pass: 'hackathon'
                }
            });

            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Lar São Francisco de Paula" <chicodepaulaeventos@gmail.com>', // sender address
                to: buyer.email, // list of receivers
                subject: 'Evento - ' + event.title, // Subject line
                html: '<b>Hello world ?</b>' // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
            });
        }
    }
}