const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(
  session({
    secret: 'super_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true } // set `secure: true` if using HTTPS
  })
);

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Session Auth API running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
