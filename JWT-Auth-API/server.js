require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('JWT Auth API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
