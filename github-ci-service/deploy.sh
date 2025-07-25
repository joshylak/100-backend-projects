#!/bin/bash

echo "Starting deployment..."
cd /path/to/your/project || exit

echo "Pulling latest code from GitHub..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Running tests..."
npm test

echo "Restarting app with PM2..."
pm2 restart your-app-name

echo "Deployment completed."
