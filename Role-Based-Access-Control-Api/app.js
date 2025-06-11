const express = require('express');
require('dotenv').config();

const authRoutes = require('./auth');
const protectedRoutes = require('./protected');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));