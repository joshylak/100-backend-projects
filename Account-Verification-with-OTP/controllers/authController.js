const jwt = require('jsonwebtoken');
const sendOTP = require('../utils/sendOTP');

const users = {}; // In-memory users
const otps = {}; // In-memory OTPs

// Signup
exports.signup = async (req, res) => {
  const { email, name } = req.body;

  if (users[email]) return res.status(400).json({ message: 'Email already registered' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otps[email] = otp;

  try {
    await sendOTP(email, otp);
    res.status(200).json({ message: 'OTP sent to email' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send OTP' });
  }
};

// Verify
exports.verifyOTP = (req, res) => {
  const { email, otp } = req.body;

  if (!otps[email] || otps[email] !== otp) {
    return res.status(400).json({ message: 'Invalid or expired OTP' });
  }

  delete otps[email]; // Clear OTP
  users[email] = { email, verified: true };

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ message: 'Account verified', token });
};
