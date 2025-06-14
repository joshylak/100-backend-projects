const nodemailer = require('nodemailer');

const sendOTP = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: `"OTP Verification" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP is: ${otp}`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendOTP;
