const express = require('express');
const bodyParser = require('body-parser');
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const jwt = require('jsonwebtoken');
const { createUser, getUser, setTempSecret, setSecret } = require('./users');

const app = express();
app.use(bodyParser.json());
const JWT_SECRET = 'your_jwt_secret';

// 👤 Signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (getUser(username)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  createUser(username, password);
  res.json({ message: 'User created' });
});

// 🔐 Login (Stage 1: password check)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = getUser(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  if (!user.secret) {
    return res.json({ message: '2FA not set up', setup_2fa: true });
  }

  res.json({ message: '2FA required', token_2fa: true });
});

// 🔑 Setup 2FA (generates QR code)
app.post('/2fa/setup', (req, res) => {
  const { username } = req.body;
  const user = getUser(username);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const secret = speakeasy.generateSecret({ name: `2FA App (${username})` });
  setTempSecret(username, secret.base32);

  qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {
    res.json({ qr: data_url, secret: secret.base32 });
  });
});

// ✅ Verify 2FA token during setup
app.post('/2fa/verify-setup', (req, res) => {
  const { username, token } = req.body;
  const user = getUser(username);
  const verified = speakeasy.totp.verify({
    secret: user.temp_secret,
    encoding: 'base32',
    token,
  });

  if (verified) {
    setSecret(username);
    res.json({ verified: true });
  } else {
    res.status(400).json({ verified: false });
  }
});

// 🔐 Verify 2FA token during login
app.post('/2fa/verify-login', (req, res) => {
  const { username, token } = req.body;
  const user = getUser(username);
  if (!user || !user.secret) return res.status(400).json({ message: '2FA not set up' });

  const verified = speakeasy.totp.verify({
    secret: user.secret,
    encoding: 'base32',
    token,
  });

  if (verified) {
    const authToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ verified: true, token: authToken });
  } else {
    res.status(400).json({ verified: false });
  }
});


app.get('/protected', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);
  try {
    const payload = jwt.verify(auth.split(' ')[1], JWT_SECRET);
    res.json({ message: `Hello ${payload.username}, you accessed protected data!` });
  } catch {
    res.sendStatus(403);
  }
});

// 🏁 Start
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
