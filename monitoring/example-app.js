import express from 'express';
import { metricsMiddleware, metricsEndpoint, recordDatabaseQuery, businessMetrics } from './metrics-middleware.js';

// Example Node.js app with Prometheus monitoring
// Day 99/100 - Backend Challenge

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(metricsMiddleware);

// Metrics endpoint
app.get('/metrics', metricsEndpoint);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API endpoints with metrics
app.get('/users', async (req, res) => {
  try {
    // Simulate database query
    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    const duration = Date.now() - start;
    
    recordDatabaseQuery('SELECT', 'users', duration);
    businessMetrics.apiCalls.inc({ endpoint: '/users', method: 'GET' });
    
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    
    res.json({ users, count: users.length });
    
  } catch (error) {
    businessMetrics.errors.inc({ type: 'database', severity: 'high' });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      businessMetrics.errors.inc({ type: 'validation', severity: 'low' });
      return res.status(400).json({ error: 'Name and email required' });
    }
    
    // Simulate user creation
    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, Math.random() * 200));
    const duration = Date.now() - start;
    
    recordDatabaseQuery('INSERT', 'users', duration);
    businessMetrics.userRegistrations.inc();
    businessMetrics.apiCalls.inc({ endpoint: '/users', method: 'POST' });
    
    const user = { id: Date.now(), name, email };
    res.status(201).json({ user });
    
  } catch (error) {
    businessMetrics.errors.inc({ type: 'database', severity: 'high' });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Simulate authentication
    const start = Date.now();
    await new Promise(resolve => setTimeout(resolve, Math.random() * 150));
    const duration = Date.now() - start;
    
    recordDatabaseQuery('SELECT', 'users', duration);
    
    const success = Math.random() > 0.2; // 80% success rate
    
    if (success) {
      businessMetrics.userLogins.inc({ status: 'success' });
      res.json({ token: 'jwt-token-here', user: { email } });
    } else {
      businessMetrics.userLogins.inc({ status: 'failed' });
      businessMetrics.errors.inc({ type: 'authentication', severity: 'medium' });
      res.status(401).json({ error: 'Invalid credentials' });
    }
    
  } catch (error) {
    businessMetrics.errors.inc({ type: 'system', severity: 'high' });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/slow', async (req, res) => {
  // Simulate slow endpoint for testing
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
  res.json({ message: 'This was a slow response' });
});

app.get('/error', (req, res) => {
  businessMetrics.errors.inc({ type: 'intentional', severity: 'high' });
  throw new Error('Intentional error for testing');
});

// Error handling
app.use((err, req, res, next) => {
  businessMetrics.errors.inc({ type: 'unhandled', severity: 'critical' });
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  console.log(`Monitoring example app running on port ${PORT}`);
  console.log(`Metrics available at http://localhost:${PORT}/metrics`);
});

export default app;