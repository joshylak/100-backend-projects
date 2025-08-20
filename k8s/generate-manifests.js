import fs from 'fs';
import path from 'path';

const services = [
  // Authentication & Security
  { name: 'two-fa-api', category: 'auth' },
  { name: 'jwt-auth-api', category: 'auth' },
  { name: 'oauth-auth-api', category: 'auth' },
  { name: 'session-auth-api', category: 'auth' },
  
  // Basic APIs
  { name: 'todo-list-api', category: 'basic' },
  { name: 'weather-api', category: 'basic' },
  { name: 'quotes-api', category: 'basic' },
  { name: 'currency-converter-api', category: 'basic' },
  { name: 'notes-api', category: 'basic' },
  
  // CRUD Applications
  { name: 'library-api', category: 'crud' },
  { name: 'fitness-tracker-api', category: 'crud' },
  { name: 'blog-api', category: 'crud' },
  
  // Advanced Services
  { name: 'chat-app-backend', category: 'advanced' },
  { name: 'stripe-payment-api', category: 'advanced' },
  { name: 'graphql-blog-api', category: 'advanced' }
];

const template = fs.readFileSync('./deployment-template.yaml', 'utf8');

services.forEach(service => {
  const manifest = template
    .replace(/{{SERVICE_NAME}}/g, service.name)
    .replace(/{{CATEGORY}}/g, service.category);
  
  fs.writeFileSync(`./manifests/${service.name}.yaml`, manifest);
  console.log(`Generated manifest for ${service.name}`);
});

console.log('All Kubernetes manifests generated!');