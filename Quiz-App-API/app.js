    import express from 'express';
    import quizRoutes from './routes/quizRoutes.js';

    const app = express();
    const PORT = 3000;

    app.use(express.json());
    app.use('/api/quizzes', quizRoutes);

    app.listen(PORT, () => {
    console.log(`Quiz API running on http://localhost:${PORT}`);
    });
