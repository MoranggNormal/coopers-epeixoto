const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendMail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await transporter.sendMail({
      from: '"Coopers - Euller Peixoto" <contact@epeixoto.dev>',
      to: email,
      subject: `Hello, ${name || "Guest"}!`,
      text: "Looks everything is working well.",
      html: `<div>
                <b>Provided email:</b>
                <p>${email}</p>
                <br>
                <b>Provided Phone:</b>
                <p>${phone}</p>
                <br>
                <b>Message:</b><br>
                <p>${message}</p>
            </div>`,
    });

    res.status(200).send({ message: "Mail sent" });
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Server error");
  }
};

module.exports = {
  sendMail,
};
