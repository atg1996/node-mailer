const nodemailer = require('nodemailer')

const sendEmail = async(req,res) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'elmira.denesik59@ethereal.email',
            pass: 'BbSHTmHTFjDEYH5N8M'
        }
    });


    let info = await transporter.sendMail({
        from:'"Your Bro" <yourBro@gmail.com>',
        to:'bar@example.com',
        subject:"Hello",
        html:"<h2>Send email with node</h2>"
    })


    res.send(info)
}

module.exports = sendEmail