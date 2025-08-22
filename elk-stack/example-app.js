import express from 'express';
import logger, { httpLogger, errorLogger, performanceLogger, dbLogger } from './logger.js';

// Example Node.js app with ELK Stack logging
// Day 97/100 - Backend Challenge

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(httpLogger);

// Routes with logging examples
app.get('/health', (req, res) => {
  logger.info('Health check requested');
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/users', async (req, res) => {
  const timer = performanceLogger.start('fetch_users');
  
  try {
    // Simulate database query
    const queryStart = Date.now();
    await new Promise(resolve => setTimeout(resolve, Math.random() * 100));
    const queryDuration = Date.now() - queryStart;
    
    dbLogger.query('SELECT * FROM users LIMIT 10', null, queryDuration);
    
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    
    logger.info('Users fetched successfully', { count: users.length });
    timer.end();
    
    res.json({ users, count: users.length });
    
  } catch (error) {
    logger.error('Failed to fetch users', { error: error.message });
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  logger.info('Creating new user', { name, email });
  
  if (!name || !email) {
    logger.warn('Invalid user data provided', { name, email });
    return res.status(400).json({ error: 'Name and email are required' });
  }
  
  // Simulate user creation
  const user = { id: Date.now(), name, email };
  logger.info('User created successfully', { userId: user.id });
  
  res.status(201).json({ user });
});

app.get('/error', (req, res) => {
  logger.warn('Error endpoint accessed - this will throw an error');
  throw new Error('This is a test error for ELK Stack logging');
});

app.get('/logs/test', (req, res) => {
  // Generate various log levels for testing
  logger.debug('Debug message - detailed information');
  logger.info('Info message - general information');
  logger.warn('Warning message - something unexpected happened');
  logger.error('Error message - something went wrong');
  
  // Log with metadata
  logger.info('User action performed', {
    userId: 123,
    action: 'view_profile',
    metadata: {
      browser: req.get('User-Agent'),
      ip: req.ip
    }
  });
  
  res.json({ message: 'Test logs generated successfully' });
});

// Error handling middleware
app.use(errorLogger);
app.use((err, req, res, next) => {
  res.status(500).json({ 
    error: 'Something went wrong!',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  logger.warn('Route not found', { 
    method: req.method, 
    url: req.url,
    ip: req.ip 
  });
  res.status(404).json({ error: 'Route not found' });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});

// Start server
app.listen(PORT, () => {
  logger.info('Server started successfully', { 
    port: PORT, 
    environment: process.env.NODE_ENV || 'development',
    pid: process.pid
  });
});

export default app;