    import express from 'express';
    import {
    createQuiz,
    getAllQuizzes,
    getQuizById,
    submitQuiz,
    } from '../controllers/quizController.js';

    const router = express.Router();

    router.post('/', createQuiz);
    router.get('/', getAllQuizzes);
    router.get('/:id', getQuizById);
    router.post('/:id/submit', submitQuiz);

    export default router;
