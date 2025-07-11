const votes = [];

module.exports = {
    getAllVotes: () => votes,
    addVote: (vote) => votes.push(vote),
};
