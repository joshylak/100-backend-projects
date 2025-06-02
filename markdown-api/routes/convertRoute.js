const express = require('express');
const router = express.Router();
const { convertMarkdown } = require('../controllers/convertController');

router.post('/', convertMarkdown);

module.exports = router;