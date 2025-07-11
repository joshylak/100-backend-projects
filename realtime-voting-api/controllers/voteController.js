const { v4: uuidv4 } = require('uuid');
const voteModel = require('../models/voteModel');

exports.getVotes = (req, res) => {
  res.json(voteModel.getAllVotes());
};

exports.submitVote = (req, res) => {
  const { option } = req.body;
  if (!option) return res.status(400).json({ error: 'Option is required' });

  const vote = {
    id: uuidv4(),
    option,
    timestamp: new Date(),
  };

  voteModel.addVote(vote);
  req.io.emit('new_vote', vote); // real-time broadcast

  res.status(201).json({ message: 'Vote submitted', vote });
};
