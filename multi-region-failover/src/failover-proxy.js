import http from 'http';
import httpProxy from 'http-proxy';

const PRIMARY = process.env.PRIMARY || 'http://localhost:3001';
const SECONDARY = process.env.SECONDARY || 'http://localhost:3002';
const PORT = process.env.PORT || 4000;
const HEALTH_PATH = '/health';
const CHECK_INTERVAL_MS = 2000; // 2s
const HEALTH_TIMEOUT_MS = 1000; // 1s

let currentTarget = PRIMARY;
let primaryHealthy = true;

const proxy = httpProxy.createProxyServer({});

proxy.on('error', (err, req, res) => {
  console.error('Proxy error', err.message);
  if (!res.headersSent) {
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Bad Gateway', details: err.message }));
  }
});

// Health checker for primary (runs in background)
async function checkPrimaryHealth() {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), HEALTH_TIMEOUT_MS);
    const resp = await fetch(PRIMARY + HEALTH_PATH, { signal: controller.signal });
    clearTimeout(id);

    if (!resp.ok) throw new Error(`status ${resp.status}`);
    const body = await resp.json();
    primaryHealthy = !!body.healthy;
  } catch (err) {
    primaryHealthy = false;
  }

  // Decide target
  const old = currentTarget;
  if (primaryHealthy) currentTarget = PRIMARY;
  else currentTarget = SECONDARY;

  if (old !== currentTarget) console.log(`Failover: routing changed -> ${currentTarget}`);
}

setInterval(checkPrimaryHealth, CHECK_INTERVAL_MS);
// check immediately on start
checkPrimaryHealth();

const server = http.createServer((req, res) => {
  const target = currentTarget;
  // log the routing decision
  console.log(`[PROXY] ${req.method} ${req.url} -> ${target}`);
  proxy.web(req, res, { target }, (e) => {
    console.error('Forwarding error:', e?.message || e);
  });
});

server.listen(PORT, () => console.log(`Failover proxy listening on http://localhost:${PORT}`));