import express from 'express';
import locationRoutes from './routes/locationRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/locations', locationRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Geo-location Tracker API');
});

export default app;
