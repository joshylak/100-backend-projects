# Prometheus + Grafana Monitoring - Day 99/100

## Overview
Complete monitoring solution using Prometheus for metrics collection and Grafana for visualization, designed for Node.js microservices with comprehensive alerting and dashboards.

## Architecture
- **Prometheus** - Metrics collection and storage
- **Grafana** - Visualization and dashboards
- **Node Exporter** - System metrics
- **cAdvisor** - Container metrics
- **AlertManager** - Alert handling and notifications

## Quick Start

### 1. Start Monitoring Stack
```bash
cd monitoring
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

### 4. Test Monitoring
```bash
npm run test:metrics
```

## Access Points

### Grafana Dashboard
```
http://localhost:3000
Username: admin
Password: admin123
```

### Prometheus
```
http://localhost:9090
```

### AlertManager
```
http://localhost:9093
```

## Features

### Application Metrics
```javascript
import { metricsMiddleware, metricsEndpoint } from './metrics-middleware.js';

app.use(metricsMiddleware);
app.get('/metrics', metricsEndpoint);
```

### Custom Business Metrics
```javascript
import { businessMetrics } from './metrics-middleware.js';

// Track user registrations
businessMetrics.userRegistrations.inc();

// Track API calls
businessMetrics.apiCalls.inc({ endpoint: '/users', method: 'GET' });

// Track errors
businessMetrics.errors.inc({ type: 'database', severity: 'high' });
```

### Database Monitoring
```javascript
import { recordDatabaseQuery } from './metrics-middleware.js';

const start = Date.now();
// ... database operation
const duration = Date.now() - start;
recordDatabaseQuery('SELECT', 'users', duration);
```

## Metrics Collected

### HTTP Metrics
- `http_requests_total` - Total HTTP requests
- `http_request_duration_seconds` - Request duration histogram
- `active_connections` - Current active connections

### System Metrics
- `nodejs_memory_usage_bytes` - Memory usage
- `nodejs_cpu_usage_percent` - CPU usage
- `nodejs_gc_duration_seconds` - Garbage collection time

### Business Metrics
- `user_registrations_total` - User signups
- `user_logins_total` - Login attempts
- `api_calls_total` - API endpoint usage
- `application_errors_total` - Application errors

### Database Metrics
- `database_queries_total` - Database query count
- `database_query_duration_seconds` - Query execution time

## Alerting Rules

### Application Alerts
- **HighErrorRate** - Error rate > 10%
- **HighResponseTime** - 95th percentile > 1s
- **ServiceDown** - Service unavailable

### System Alerts
- **HighCPUUsage** - CPU usage > 80%
- **HighMemoryUsage** - Memory usage > 85%
- **DiskSpaceLow** - Disk usage > 90%

## Grafana Dashboards

### Application Performance
- Request rate and response time trends
- Error rate monitoring
- Service availability status
- API endpoint performance

### System Resources
- CPU and memory utilization
- Disk I/O and network traffic
- Container resource usage
- Node.js process metrics

### Business Intelligence
- User registration trends
- Login success rates
- Feature usage analytics
- Revenue and conversion metrics

## Configuration

### Prometheus Targets
```yaml
scrape_configs:
  - job_name: 'backend-apis'
    static_configs:
      - targets: 
        - 'host.docker.internal:3001'
        - 'host.docker.internal:3005'
    metrics_path: '/metrics'
    scrape_interval: 30s
```

### Alert Routing
```yaml
route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'web.hook'
```

## Production Setup

### Security
- Enable authentication for Grafana
- Configure HTTPS for all endpoints
- Set up proper firewall rules
- Use secrets for sensitive configuration

### Scalability
- Configure Prometheus federation
- Set up remote storage
- Implement high availability
- Use service discovery

### Retention
```yaml
# Prometheus retention
--storage.tsdb.retention.time=200h
--storage.tsdb.retention.size=50GB
```

## Integration Examples

### Express.js
```javascript
import express from 'express';
import { metricsMiddleware, metricsEndpoint } from './metrics-middleware.js';

const app = express();
app.use(metricsMiddleware);
app.get('/metrics', metricsEndpoint);
```

### Custom Metrics
```javascript
const customCounter = new promClient.Counter({
  name: 'custom_operations_total',
  help: 'Total custom operations',
  labelNames: ['operation_type']
});

customCounter.inc({ operation_type: 'user_action' });
```

## Troubleshooting

### Common Issues
1. **Metrics not appearing** - Check target configuration
2. **High memory usage** - Adjust retention settings
3. **Dashboard not loading** - Verify datasource connection
4. **Alerts not firing** - Check alert rule syntax

### Health Checks
```bash
# Prometheus targets
curl http://localhost:9090/api/v1/targets

# Grafana health
curl http://localhost:3000/api/health

# Metrics endpoint
curl http://localhost:3001/metrics
```

## Cleanup
```bash
docker-compose down -v
```