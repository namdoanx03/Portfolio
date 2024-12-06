const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@example.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
