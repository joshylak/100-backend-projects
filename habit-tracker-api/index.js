import express from 'express';
import bodyParser from 'body-parser';
import habitRoutes from './routes/habits.js';

const app = express();
app.use(bodyParser.json());

app.use('/api', habitRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Habit Tracker running at http://localhost:${PORT}`));
