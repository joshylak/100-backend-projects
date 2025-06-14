const express = require('express');
const { signup, verifyOTP } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/verify', verifyOTP);

module.exports = router;
