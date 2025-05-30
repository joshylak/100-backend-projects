require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const IPINFO_TOKEN = process.env.IPINFO_TOKEN;

// Middleware
app.use(cors());
app.use(express.json());

// Client IP detection middleware
app.use((req, res, next) => {
  req.clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  next();
});

// IP lookup endpoint
app.get('/lookup', async (req, res) => {
  try {
    const ip = req.query.ip || req.clientIp.split(',')[0].trim();
    const response = await axios.get(`https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`);
    
    res.json({
      ip: response.data.ip,
      city: response.data.city,
      region: response.data.region,
      country: response.data.country,
      loc: response.data.loc,
      org: response.data.org,
      postal: response.data.postal,
      timezone: response.data.timezone
    });
  } catch (error) {
    console.error('IP lookup error:', error.message);
    res.status(500).json({ 
      error: 'Failed to fetch IP information',
      details: error.response?.data || error.message
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});