require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth/passport');

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/profile',
  failureRedirect: '/'
}));

app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
app.get('/auth/github/callback', passport.authenticate('github', {
  successRedirect: '/profile',
  failureRedirect: '/'
}));

app.get('/profile', (req, res) => {
  if (!req.user) return res.redirect('/');
  res.json({ message: `Welcome ${req.user.name}`, provider: req.user.provider });
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

app.get('/', (req, res) => {
  res.send(`
    <h2>OAuth Login</h2>
    <a href="/auth/google">Login with Google</a><br>
    <a href="/auth/github">Login with GitHub</a>
  `);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`OAuth server running on port ${PORT}`));
