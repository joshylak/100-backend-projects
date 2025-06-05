const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.get('/', countryController.getAllCountries);
router.get('/:name', countryController.getCountryByName);
router.get('/code/:code', countryController.getCountryByCode);
router.get('/region/:region', countryController.getCountriesByRegion);

module.exports = router;