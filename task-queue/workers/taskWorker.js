import taskQueue from '../queues/taskQueue.js';

taskQueue.process(async (job) => {
  console.log('Processing job:', job.id, job.data);

  // Simulate task
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log('Task done:', job.id);
  return { result: 'Success' };
});
