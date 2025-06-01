const express = require('express');
const { calculateBMI } = require('../controllers/bmiController');

const router = express.Router();

router.post('/', calculateBMI);

module.exports = router;