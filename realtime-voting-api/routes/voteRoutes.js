const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');

router.get('/', voteController.getVotes);
router.post('/', voteController.submitVote);

module.exports = router;
