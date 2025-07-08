    import express from 'express';
    import pollRoutes from './routes/pollRoutes.js';

    const app = express();
    const PORT = 3000;

    app.use(express.json());
    app.use('/api/polls', pollRoutes);

    app.listen(PORT, () => {
    console.log(`Live Poll API running at http://localhost:${PORT}`);
    });
