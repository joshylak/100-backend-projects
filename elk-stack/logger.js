import winston from 'winston';
import 'winston-elasticsearch';

// ELK Stack Logger for Node.js Applications
// Day 97/100 - Backend Challenge

const { combine, timestamp, printf, json, colorize } = winston.format;

// Custom log format
const logFormat = printf(({ level, message, timestamp, service, ...meta }) => {
  return JSON.stringify({
    timestamp,
    level,
    service: service || 'backend-api',
    message,
    ...meta
  });
});

// Create logger instance
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    json(),
    logFormat
  ),
  defaultMeta: {
    service: process.env.SERVICE_NAME || 'backend-api',
    environment: process.env.NODE_ENV || 'development'
  },
  transports: [
    // Console output
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: 'HH:mm:ss' }),
        printf(({ timestamp, level, message, service }) => {
          return `[${timestamp}] ${level}: [${service}] ${message}`;
        })
      )
    }),
    
    // File output
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: combine(timestamp(), json())
    }),
    
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: combine(timestamp(), json())
    }),
    
    // Elasticsearch output (when available)
    ...(process.env.ELASTICSEARCH_HOST ? [
      new winston.transports.Elasticsearch({
        level: 'info',
        clientOpts: {
          node: process.env.ELASTICSEARCH_HOST || 'http://localhost:9200'
        },
        index: 'backend-logs',
        indexTemplate: {
          name: 'backend-logs-template',
          pattern: 'backend-logs-*',
          settings: {
            number_of_shards: 1,
            number_of_replicas: 0
          },
          mappings: {
            properties: {
              '@timestamp': { type: 'date' },
              level: { type: 'keyword' },
              message: { type: 'text' },
              service: { type: 'keyword' },
              environment: { type: 'keyword' }
            }
          }
        }
      })
    ] : [])
  ]
});

// HTTP request logger middleware
export const httpLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logData = {
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent')
    };
    
    if (res.statusCode >= 400) {
      logger.error('HTTP Request Error', logData);
    } else {
      logger.info('HTTP Request', logData);
    }
  });
  
  next();
};

// Error logger middleware
export const errorLogger = (err, req, res, next) => {
  logger.error('Application Error', {
    error: err.message,
    stack: err.stack,
    method: req.method,
    url: req.url,
    ip: req.ip
  });
  
  next(err);
};

// Performance logger
export const performanceLogger = {
  start: (operation) => {
    const start = process.hrtime.bigint();
    return {
      end: () => {
        const end = process.hrtime.bigint();
        const duration = Number(end - start) / 1000000; // Convert to milliseconds
        logger.info('Performance Metric', {
          operation,
          duration: `${duration.toFixed(2)}ms`
        });
      }
    };
  }
};

// Database query logger
export const dbLogger = {
  query: (sql, params, duration) => {
    logger.info('Database Query', {
      sql: sql.substring(0, 100) + (sql.length > 100 ? '...' : ''),
      params: params ? JSON.stringify(params).substring(0, 200) : null,
      duration: `${duration}ms`
    });
  },
  
  error: (sql, error) => {
    logger.error('Database Error', {
      sql: sql.substring(0, 100),
      error: error.message
    });
  }
};

export default logger;