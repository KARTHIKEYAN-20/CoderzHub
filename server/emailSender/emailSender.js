import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_PASSWD
    }
});

const sendEmail = async (recipient, subject, body) => {
    return new Promise((resolve, reject) => {
        const mailOptions = {
            from: process.env.GMAIL_ADDRESS,
            to: recipient,
            subject: subject,
            text: body
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
};

export default sendEmail;
