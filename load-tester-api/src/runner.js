import fetch from 'node-fetch'; // If using Node < 18, install node-fetch
import { Stats } from './stats.js';

export async function runLoadTest({ url, requests, concurrency }) {
  const stats = new Stats();
  let active = 0;
  let completed = 0;

  async function worker() {
    while (completed < requests) {
      if (active >= concurrency) {
        await new Promise(r => setTimeout(r, 10));
        continue;
      }

      active++;
      const start = Date.now();

      try {
        const res = await fetch(url);
        if (res.ok) {
          stats.addSuccess(Date.now() - start);
        } else {
          stats.addError();
        }
      } catch {
        stats.addError();
      } finally {
        active--;
        completed++;
      }
    }
  }

  // Start concurrent workers
  const workers = [];
  for (let i = 0; i < concurrency; i++) {
    workers.push(worker());
  }

  await Promise.all(workers);
  return stats.report(requests);
}
