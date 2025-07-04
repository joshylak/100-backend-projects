import express from 'express';
import destinationRoutes from './routes/destinations.js';

const app = express();
app.use(express.json());

app.use('/api/destinations', destinationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
