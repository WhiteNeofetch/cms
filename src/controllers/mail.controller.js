const nodemailer = require('nodemailer')

module.exports = {
    async send(req, res) {
        const name = req.body.name;
        const smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.GMAIL,
                pass: process.env.GMAIL_PW
            }
        });
        const mailOptions = {
            from: req.body.from,
            to: process.env.GMAIL,
            subject: name + ' | new message! From ' + req.body.from,
            text: req.body.message
        }
        smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
            } else {
                res.send('OKK')
                // res.redirect('/');
            }
        });
        res.sendStatus(200)
    }
}