    import express from 'express';
    import bodyParser from 'body-parser';
    import clientRoutes from './routes/clientRoutes.js';
    import projectRoutes from './routes/projectRoutes.js';

    const app = express();
    const PORT = 3000;

    app.use(bodyParser.json());

    app.use('/clients', clientRoutes);
    app.use('/projects', projectRoutes);

    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });
