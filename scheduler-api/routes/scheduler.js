    import express from 'express';
    import cron from 'node-cron';
    import { addJob, getJobs, deleteJob } from '../jobs/jobManager.js';

    const router = express.Router();

    router.post('/create', (req, res) => {
    const { cronTime, task } = req.body;
    if (!cron.validate(cronTime)) {
        return res.status(400).json({ error: 'Invalid cron expression' });
    }
    const newJob = addJob(cronTime, task);
    res.status(201).json({ message: 'Job scheduled', job: newJob });
    });

    router.get('/', (req, res) => {
    const jobs = getJobs();
    res.json(jobs);
    });

    router.delete('/:id', (req, res) => {
    const deleted = deleteJob(req.params.id);
    if (deleted) {
        res.json({ message: 'Job deleted successfully' });
    } else {
        res.status(404).json({ error: 'Job not found' });
    }
    });

    export default router;
