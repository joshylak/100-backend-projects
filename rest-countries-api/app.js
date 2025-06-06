const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const countryRoutes = require('./routes/countryRoutes');

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/countries', countryRoutes);

app.get('/', (req, res) => res.send('REST Countries API Clone'));
module.exports = app;
