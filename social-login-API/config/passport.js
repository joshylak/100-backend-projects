import dotenv from 'dotenv';
dotenv.config();

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    async (accessToken, refreshToken, profile, done) => {
      // No DB, just pass the profile
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user); // Save whole profile in session
});

passport.deserializeUser((obj, done) => {
  done(null, obj); // Retrieve user from session
});
