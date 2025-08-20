# Kubernetes Deployment for 100 Backend Projects

## Prerequisites
- Kubernetes cluster (minikube, kind, or cloud provider)
- kubectl configured
- Docker images built and pushed to registry

## Quick Start

### 1. Generate Manifests
```bash
cd k8s
node generate-manifests.js
```

### 2. Deploy to Kubernetes
```bash
# Make script executable (Linux/Mac)
chmod +x deploy.sh
./deploy.sh

# Or deploy manually
kubectl apply -f namespace.yaml
kubectl apply -f configmap.yaml
kubectl apply -f manifests/
kubectl apply -f ingress.yaml
```

### 3. Using Kustomize
```bash
kubectl apply -k .
```

## Architecture

### Services Categories
- **Authentication** (auth): JWT, OAuth, 2FA services
- **Basic** (basic): Simple CRUD and utility APIs  
- **CRUD** (crud): Data management services
- **Advanced** (advanced): Complex business logic services

### Resource Allocation
- **CPU**: 100m request, 200m limit
- **Memory**: 128Mi request, 256Mi limit
- **Replicas**: 2 (auto-scales 2-10 based on load)

### Health Checks
- **Liveness**: `/health` endpoint (30s delay, 10s interval)
- **Readiness**: `/health` endpoint (5s delay, 5s interval)

## Scaling

### Manual Scaling
```bash
kubectl scale deployment jwt-auth-api --replicas=5 -n backend-projects
```

### Auto-scaling (HPA)
```bash
kubectl apply -f hpa.yaml
kubectl get hpa -n backend-projects
```

## Monitoring
```bash
# Check pods
kubectl get pods -n backend-projects

# Check services
kubectl get svc -n backend-projects

# View logs
kubectl logs -f deployment/jwt-auth-api -n backend-projects

# Port forward for testing
kubectl port-forward svc/jwt-auth-api-service 8080:80 -n backend-projects
```

## Cleanup
```bash
kubectl delete namespace backend-projects
```