import cron from 'node-cron';
import { v4 as uuidv4 } from 'uuid';

const jobs = new Map();

export const addJob = (cronTime, task) => {
    const id = uuidv4();
    const job = cron.schedule(cronTime, () => {
    console.log(`[${new Date().toISOString()}] Job ID ${id}:`, task.message || 'Running task');
    });
    jobs.set(id, { id, cronTime, task, job });
    return { id, cronTime, task };
};

export const getJobs = () => {
    return [...jobs.values()].map(({ job, ...meta }) => meta);
};

export const deleteJob = (id) => {
if (jobs.has(id)) {
    jobs.get(id).job.stop();
    jobs.delete(id);
    return true;
    }
return false;
};
