require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

const users = []; // mock DB

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/auth/google/callback`
}, (accessToken, refreshToken, profile, done) => {
  let user = users.find(u => u.id === profile.id);
  if (!user) {
    user = { id: profile.id, name: profile.displayName, provider: 'google' };
    users.push(user);
  }
  return done(null, user);
}));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/auth/github/callback`
}, (accessToken, refreshToken, profile, done) => {
  let user = users.find(u => u.id === profile.id);
  if (!user) {
    user = { id: profile.id, name: profile.username, provider: 'github' };
    users.push(user);
  }
  return done(null, user);
}));