const express = require('express');
const app = express();

app.use(express.json());

// Routes
app.use('/api/dashboard', require('./routes/dashboardRoutes'));

app.get('/', (req, res) => {
  res.send('Mock Dashboard API is running.');
});

module.exports = app;
