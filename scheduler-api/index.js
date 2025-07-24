import express from 'express';
import schedulerRouter from './routes/scheduler.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/scheduler', schedulerRouter);

app.listen(PORT, () => {
    console.log(`Scheduler API running on http://localhost:${PORT}`);
});
