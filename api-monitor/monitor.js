import axios from 'axios';
import cron from 'node-cron';
import fs from 'fs';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

// Load config file (ensure no comments in JSON)
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Step 1: Ensure logs.json exists and is valid
const dbFile = 'logs.json';

if (!fs.existsSync(dbFile) || fs.readFileSync(dbFile, 'utf8').trim() === '') {
  fs.writeFileSync(dbFile, JSON.stringify({ logs: [] }, null, 2));
}

// Step 2: Set up the adapter and pass default data
const adapter = new JSONFile(dbFile);
const defaultData = { logs: [] }; // Required for Low v3.x+
const db = new Low(adapter, defaultData); // ✅ PASS DEFAULT HERE

await db.read();

// Step 3: Make sure logs array always exists
db.data.logs ??= [];

// Step 4: Function to check an API endpoint
const checkEndpoint = async ({ url, threshold }) => {
  const start = Date.now();
  try {
    const response = await axios.get(url);
    const duration = Date.now() - start;

    const log = {
      url,
      status: response.status,
      success: response.status >= 200 && response.status < 300,
      slow: duration > threshold,
      duration,
      timestamp: new Date().toISOString()
    };

    db.data.logs.push(log);
    console.log(`[${log.timestamp}] ✅ ${url} - ${response.status} - ${duration}ms${log.slow ? ' ⚠️ SLOW' : ''}`);
  } catch (error) {
    const log = {
      url,
      status: 'ERROR',
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    };

    db.data.logs.push(log);
    console.error(`[${log.timestamp}] ❌ ${url} - DOWN - ${error.message}`);
  }

  await db.write();
};

// Step 5: Schedule API checks
cron.schedule(config.interval, async () => {
  console.log('\n🔁 Running API checks...');
  for (const endpoint of config.endpoints) {
    await checkEndpoint(endpoint);
  }
});
