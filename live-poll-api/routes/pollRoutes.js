    import express from 'express';
    import {
    createPoll,
    getAllPolls,
    getPollById,
    votePoll,
    getPollResults
    } from '../controllers/pollController.js';

    const router = express.Router();

    router.post('/', createPoll);
    router.get('/', getAllPolls);
    router.get('/:id', getPollById);
    router.post('/:id/vote', votePoll);
    router.get('/:id/results', getPollResults);

    export default router;
