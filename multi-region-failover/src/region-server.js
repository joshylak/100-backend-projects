import express from 'express';
import process from 'process';

const argv = Object.fromEntries(process.argv.slice(2).map((a) => a.split('=')));
const PORT = Number(argv['--port'] || process.env.PORT || 3001);
const REGION = argv['--region'] || process.env.REGION || 'A';

const app = express();
app.use(express.json());

let healthy = true; // toggle for simulation

app.get('/', (req, res) => {
  res.json({ region: REGION, message: `Hello from region ${REGION}`, timestamp: new Date().toISOString() });
});

// Health endpoint polled by the proxy
app.get('/health', (req, res) => {
  res.json({ region: REGION, healthy });
});

// Simulate bringing region down/up
app.post('/simulate/down', (req, res) => {
  healthy = false;
  console.log(`[${REGION}] set to DOWN`);
  res.json({ region: REGION, healthy });
});

app.post('/simulate/up', (req, res) => {
  healthy = true;
  console.log(`[${REGION}] set to UP`);
  res.json({ region: REGION, healthy });
});

// A sample endpoint to demonstrate forwarded requests
app.get('/data', (req, res) => {
  res.json({ region: REGION, data: `Important data from ${REGION}`, now: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`Region ${REGION} server listening on http://localhost:${PORT}`));