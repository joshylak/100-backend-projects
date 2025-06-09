const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/sendEmail');

const filePath = path.join(__dirname, '..', 'users.json');

const getUsers = () => JSON.parse(fs.readFileSync(filePath));
const saveUsers = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

exports.requestReset = async (req, res) => {
  const { email } = req.body;
  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) return res.status(404).json({ msg: 'User not found' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
  user.resetToken = token;
  user.resetTokenExpire = Date.now() + 15 * 60 * 1000;
  saveUsers(users);

  const resetLink = `${process.env.CLIENT_URL}/reset-password/${token}`;
  await sendEmail(email, 'Reset Your Password', `<p>Click <a href="${resetLink}">here</a> to reset your password</p>`);

  res.json({ msg: 'Password reset link sent' });
};

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  const users = getUsers();

  let user = null;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    user = users.find(u => u.id === decoded.id && u.resetToken === token && u.resetTokenExpire > Date.now());
  } catch {
    return res.status(400).json({ msg: 'Invalid or expired token' });
  }

  if (!user) return res.status(400).json({ msg: 'Invalid token or user not found' });

  const hashed = await bcrypt.hash(newPassword, 10);
  user.password = hashed;
  user.resetToken = null;
  user.resetTokenExpire = null;

  saveUsers(users);
  res.json({ msg: 'Password reset successfully' });
};
