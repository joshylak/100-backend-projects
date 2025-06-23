import express from 'express';
import workoutRoutes from './routes/workouts.js';
import calorieRoutes from './routes/calories.js';

const app = express();
app.use(express.json());

app.use('/api/workouts', workoutRoutes);
app.use('/api/calories', calorieRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Fitness Tracker API running on port ${PORT}`));
