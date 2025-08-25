import promClient from 'prom-client';

// Prometheus metrics middleware for Node.js applications
// Day 99/100 - Backend Challenge

// Create a Registry
const register = new promClient.Registry();

// Add default metrics
promClient.collectDefaultMetrics({
  register,
  prefix: 'nodejs_'
});

// Custom metrics
const httpRequestsTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
  registers: [register]
});

const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.5, 1, 2, 5],
  registers: [register]
});

const activeConnections = new promClient.Gauge({
  name: 'active_connections',
  help: 'Number of active connections',
  registers: [register]
});

const databaseQueries = new promClient.Counter({
  name: 'database_queries_total',
  help: 'Total number of database queries',
  labelNames: ['operation', 'table'],
  registers: [register]
});

const databaseQueryDuration = new promClient.Histogram({
  name: 'database_query_duration_seconds',
  help: 'Duration of database queries in seconds',
  labelNames: ['operation', 'table'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1],
  registers: [register]
});

// Middleware function
export const metricsMiddleware = (req, res, next) => {
  const start = Date.now();
  
  // Increment active connections
  activeConnections.inc();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route?.path || req.path || 'unknown';
    
    // Record metrics
    httpRequestsTotal.inc({
      method: req.method,
      route,
      status: res.statusCode
    });
    
    httpRequestDuration.observe({
      method: req.method,
      route,
      status: res.statusCode
    }, duration);
    
    // Decrement active connections
    activeConnections.dec();
  });
  
  next();
};

// Metrics endpoint
export const metricsEndpoint = async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    res.status(500).end(error);
  }
};

// Database metrics helper
export const recordDatabaseQuery = (operation, table, duration) => {
  databaseQueries.inc({ operation, table });
  databaseQueryDuration.observe({ operation, table }, duration / 1000);
};

// Custom business metrics
export const businessMetrics = {
  userRegistrations: new promClient.Counter({
    name: 'user_registrations_total',
    help: 'Total number of user registrations',
    registers: [register]
  }),
  
  userLogins: new promClient.Counter({
    name: 'user_logins_total',
    help: 'Total number of user logins',
    labelNames: ['status'],
    registers: [register]
  }),
  
  apiCalls: new promClient.Counter({
    name: 'api_calls_total',
    help: 'Total number of API calls',
    labelNames: ['endpoint', 'method'],
    registers: [register]
  }),
  
  errors: new promClient.Counter({
    name: 'application_errors_total',
    help: 'Total number of application errors',
    labelNames: ['type', 'severity'],
    registers: [register]
  })
};

export { register };
export default {
  metricsMiddleware,
  metricsEndpoint,
  recordDatabaseQuery,
  businessMetrics,
  register
};