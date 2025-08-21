# GitHub Actions CI/CD Pipeline

## Overview
Automated CI/CD pipeline for 93 Node.js microservices with intelligent change detection, parallel builds, and multi-environment deployments.

## Workflows

### 1. CI/CD Pipeline (`ci-cd.yml`)
**Triggers:** Push to main/develop, Pull requests
**Features:**
- 🔍 Smart change detection (only builds modified services)
- 🧪 Parallel testing and linting
- 🐳 Docker image building with caching
- 🚀 Automated deployment to staging/production
- 💨 Smoke tests after deployment

### 2. Security Scan (`security-scan.yml`)
**Triggers:** Push, PR, Weekly schedule
**Features:**
- 🔒 npm audit for vulnerabilities
- 🛡️ Snyk security scanning
- 🔍 CodeQL static analysis

### 3. Performance Testing (`performance-test.yml`)
**Triggers:** After successful CI/CD completion
**Features:**
- ⚡ Load testing all deployed services
- 📊 Performance report generation
- 🎯 Automated health endpoint testing

### 4. Health Check (`health-check.yml`)
**Triggers:** Every 15 minutes, Manual
**Features:**
- 💓 Continuous service monitoring
- 🔄 Automatic restart of unhealthy services
- 📢 Slack notifications on failures

### 5. Cleanup (`cleanup.yml`)
**Triggers:** Weekly schedule, Manual
**Features:**
- 🗑️ Remove old container images
- 📦 Clean up old artifacts
- 💾 Optimize storage usage

## Setup Instructions

### 1. Repository Secrets
Add these secrets in GitHub Settings > Secrets:

```bash
# Kubernetes configs (base64 encoded)
KUBE_CONFIG_STAGING
KUBE_CONFIG_PROD

# Optional integrations
SNYK_TOKEN          # For security scanning
SLACK_WEBHOOK_URL   # For notifications
```

### 2. Environment Protection
Configure environments in GitHub Settings > Environments:
- `staging` - Auto-deploy from develop branch
- `production` - Manual approval required

### 3. Branch Protection
Set up branch protection rules:
- Require PR reviews
- Require status checks to pass
- Require branches to be up to date

## Workflow Features

### Smart Change Detection
Only builds and deploys services that have actually changed:
```yaml
# Detects changes in service directories
CHANGED_DIRS=$(git diff --name-only ${{ github.event.before }} ${{ github.sha }})
```

### Parallel Processing
Builds multiple services simultaneously using matrix strategy:
```yaml
strategy:
  matrix:
    service: ${{ fromJson(needs.detect-changes.outputs.services) }}
```

### Container Registry
Uses GitHub Container Registry (ghcr.io) for image storage:
- Automatic tagging with branch/SHA
- Layer caching for faster builds
- Automatic cleanup of old images

### Multi-Environment Deployment
- **Staging:** Auto-deploy from `develop` branch
- **Production:** Auto-deploy from `main` branch with smoke tests

## Usage Examples

### Manual Deployment
```bash
# Trigger deployment workflow
gh workflow run ci-cd.yml

# Run health check
gh workflow run health-check.yml

# Clean up resources
gh workflow run cleanup.yml
```

### Monitoring
```bash
# Check workflow status
gh run list

# View logs
gh run view <run-id>

# Check service health
kubectl get pods -n backend-projects
```

## Best Practices
- ✅ Always create feature branches
- ✅ Write meaningful commit messages
- ✅ Add tests for new features
- ✅ Update documentation
- ✅ Use semantic versioning for releases