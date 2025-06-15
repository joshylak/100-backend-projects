import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
import './config/passport.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>');
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});