# Base Dockerfile for all Node.js projects
FROM node:18

# Set work directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code
COPY . .

# Expose default port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]