#!/bin/bash

echo "🚀 Deploying 100 Backend Projects to Kubernetes..."

# Generate manifests
echo "📝 Generating Kubernetes manifests..."
cd k8s
node generate-manifests.js

# Apply namespace first
echo "🏗️ Creating namespace..."
kubectl apply -f namespace.yaml

# Apply ConfigMap
echo "⚙️ Applying ConfigMap..."
kubectl apply -f configmap.yaml

# Apply all service manifests
echo "🔧 Deploying services..."
kubectl apply -f manifests/

# Apply Ingress
echo "🌐 Setting up Ingress..."
kubectl apply -f ingress.yaml

# Check deployment status
echo "📊 Checking deployment status..."
kubectl get pods -n backend-projects
kubectl get services -n backend-projects

echo "✅ Deployment complete!"
echo "🔗 Access services via: http://api.backend-projects.local"