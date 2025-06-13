import express from 'express';
import activityRoutes from './routes/activityRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/activities', activityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});