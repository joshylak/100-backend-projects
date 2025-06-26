    import express from 'express';
    import inventoryRoutes from './routes/inventoryRoutes.js';

    const app = express();
    const PORT = process.env.PORT || 3000;

    app.use(express.json());
    app.use('/api/inventory', inventoryRoutes);

    app.listen(PORT, () => {
    console.log(`Inventory API running on http://localhost:${PORT}`);
    });
