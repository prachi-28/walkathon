const mailer = require("nodemailer")
const aws = require("aws-sdk")
const path = require("path")
aws.config.loadFromPath(path.join(__dirname, "aws-creds.json"));
  
const transporter = mailer.createTransport({
    SES: new aws.SES(),
  });

let exp = {};

exp.sendMail = (email) => {
    const to = email;
    const from = "Techtatva 2020 < sysadm@mitportals.in>";
    const gform = `https://www.google.com/`;
    const html =
        `
            <html>
            Hello, ${gform}. Thank you.
            </html>
        `;
    transporter.sendMail({
        from,
        to,
        html,
        subject: "TechTatva'20 - Walkathon Invite",
    });
    console.log('Email sent.')
};

module.exports = exp;