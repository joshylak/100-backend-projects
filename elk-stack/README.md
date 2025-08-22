# ELK Stack Logging - Day 97/100

## Overview
Complete ELK Stack (Elasticsearch, Logstash, Kibana) implementation for Node.js applications with structured logging, real-time monitoring, and comprehensive log analysis.

## Architecture
- **Elasticsearch** - Search and analytics engine for log storage
- **Logstash** - Log processing pipeline with filtering and parsing
- **Kibana** - Visualization and dashboard platform
- **Filebeat** - Log shipping agent for file-based logs
- **Winston** - Node.js logging library with ELK integration

## Quick Start

### 1. Start ELK Stack
```bash
cd elk-stack
docker-compose up -d
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Example Application
```bash
npm start
```

### 4. Test Logging
```bash
npm run test:logs
```

### 5. Access Kibana Dashboard
```
http://localhost:5601
```

## Features

### Structured Logging
```javascript
import logger from './logger.js';

logger.info('User action', {
  userId: 12345,
  action: 'login',
  ip: '192.168.1.100',
  timestamp: new Date().toISOString()
});
```

### Performance Monitoring
```javascript
import { performanceLogger } from './logger.js';

const timer = performanceLogger.start('database_query');
// ... perform operation
timer.end(); // Logs duration automatically
```

### HTTP Request Logging
```javascript
import { httpLogger } from './logger.js';

app.use(httpLogger); // Logs all HTTP requests with timing
```

### Database Query Logging
```javascript
import { dbLogger } from './logger.js';

dbLogger.query('SELECT * FROM users', null, 45); // SQL, params, duration
```

## Log Levels
- **DEBUG** - Detailed debugging information
- **INFO** - General application information  
- **WARN** - Warning messages for unexpected situations
- **ERROR** - Error messages for failures

## Kibana Dashboards

### Application Performance
- Response time trends
- Request volume metrics
- Error rate monitoring
- Performance bottlenecks

### Error Tracking
- Error frequency and patterns
- Stack trace analysis
- Error categorization
- Alert thresholds

### User Activity
- User session tracking
- Feature usage analytics
- Geographic distribution
- Behavior patterns

## Configuration

### Environment Variables
```bash
LOG_LEVEL=info
SERVICE_NAME=my-api
NODE_ENV=production
ELASTICSEARCH_HOST=http://localhost:9200
```

### Custom Log Formats
```javascript
const customFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    return JSON.stringify({ timestamp, level, message, ...meta });
  })
);
```

## Elasticsearch Indices
- `backend-logs-YYYY.MM.DD` - Daily application logs
- `filebeat-YYYY.MM.DD` - File-based logs
- `logstash-YYYY.MM.DD` - Processed logs

## Logstash Patterns
```ruby
# Custom grok patterns for Node.js logs
NODEJS_LOG \[%{TIMESTAMP_ISO8601:timestamp}\] %{LOGLEVEL:level}: %{GREEDYDATA:message}
```

## Monitoring & Alerting

### Key Metrics
- Log volume per minute
- Error rate percentage
- Response time percentiles
- Memory and CPU usage

### Alert Conditions
- Error rate > 5%
- Response time > 1000ms
- Log volume spike > 200%
- Service unavailability

## Production Deployment

### Security
```yaml
# elasticsearch.yml
xpack.security.enabled: true
xpack.security.transport.ssl.enabled: true
```

### Performance Tuning
```yaml
# logstash.yml
pipeline.workers: 4
pipeline.batch.size: 1000
pipeline.batch.delay: 50
```

### Retention Policy
```json
{
  "policy": {
    "phases": {
      "hot": { "actions": {} },
      "delete": { "min_age": "30d" }
    }
  }
}
```

## Troubleshooting

### Common Issues
1. **Elasticsearch not starting** - Check memory allocation
2. **Logs not appearing** - Verify Filebeat configuration
3. **Kibana connection failed** - Check Elasticsearch health
4. **High memory usage** - Adjust JVM heap settings

### Health Checks
```bash
# Elasticsearch
curl http://localhost:9200/_cluster/health

# Logstash
curl http://localhost:9600/_node/stats

# Kibana
curl http://localhost:5601/api/status
```

## Cost Optimization
- Use index lifecycle management
- Configure log retention policies
- Optimize shard allocation
- Monitor resource usage

## Integration Examples

### Express.js
```javascript
import express from 'express';
import { httpLogger, errorLogger } from './logger.js';

const app = express();
app.use(httpLogger);
app.use(errorLogger);
```

### Database Integration
```javascript
// Sequelize example
sequelize.addHook('beforeQuery', (options) => {
  options.startTime = Date.now();
});

sequelize.addHook('afterQuery', (options) => {
  const duration = Date.now() - options.startTime;
  dbLogger.query(options.sql, options.bind, duration);
});
```

## Cleanup
```bash
docker-compose down -v  # Removes containers and volumes
```