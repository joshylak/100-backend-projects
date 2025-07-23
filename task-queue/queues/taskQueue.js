import Queue from 'bull';
import dotenv from 'dotenv';
dotenv.config();

const taskQueue = new Queue('task-queue', process.env.REDIS_URL);

export default taskQueue;
