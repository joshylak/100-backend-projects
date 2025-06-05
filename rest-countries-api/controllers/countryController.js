const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1';

exports.getAllCountries = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};

exports.getCountryByName = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/name/${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'Country not found' });
  }
};

exports.getCountryByCode = async (req, res) => {
  const { code } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/alpha/${code}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'Country code not found' });
  }
};

exports.getCountriesByRegion = async (req, res) => {
  const { region } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/region/${region}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ error: 'Region not found' });
  }
};