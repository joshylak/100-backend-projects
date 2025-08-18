import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { config } from './config.js';
import { authRouter } from './routes/auth.routes.js';
import { secretsRouter } from './routes/secret.routes.js';
import { requireAuth, persistAudit } from './middleware/auth.js';
import { authLimiter, apiLimiter } from './middleware/limiter.js';

const app = express();

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors());
app.use(express.json({ limit: '256kb' }));
app.use(morgan('tiny'));

app.get('/health', (_req, res) => res.json({ ok: true, env: config.env }));

app.use('/auth', authLimiter, authRouter);

// Authenticated API
app.use('/secrets', apiLimiter, requireAuth, persistAudit, secretsRouter);

// 404 + error handler
app.use((req, res) => res.status(404).json({ success: false, error: 'Not found' }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, error: 'Server error' });
});

app.listen(config.port, () => {
  console.log(`Secure Secret Store listening on :${config.port}`);
});
