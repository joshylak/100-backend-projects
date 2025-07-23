import express from 'express';
import dotenv from 'dotenv';
import taskQueue from './queues/taskQueue.js';
import './workers/taskWorker.js';

dotenv.config();
const app = express();
app.use(express.json());

app.post('/task', async (req, res) => {
  const { name } = req.body;

  const job = await taskQueue.add({ name });

  res.status(202).json({ jobId: job.id, status: 'Task queued' });
});

app.get('/task/:id', async (req, res) => {
  const job = await taskQueue.getJob(req.params.id);

  if (!job) return res.status(404).json({ error: 'Job not found' });

  const state = await job.getState();
  const progress = job._progress;
  const result = job.returnvalue;

  res.json({ id: job.id, state, progress, result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
