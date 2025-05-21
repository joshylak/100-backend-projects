const express = require('express');
const weatherData = require('./data/weatherData');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Mock Weather API is running');
});
app.get('/api/weather', (req, res) => {
    res.json(weatherData);
});

app.get('/api/weather/:city', (req, res) => {
    const city = req.params.city;
    const weather = weatherData.find(w => w.city.toLowerCase() === city.toLowerCase());
    if (weather) {
        res.json(weather);
    } else {
        res.status(404).json({ message: 'City not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Mock Weather API is running on http://localhost:${PORT}`);
});