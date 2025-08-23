#!/bin/bash
yum update -y
yum install -y git

# Install Node.js 18
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs

# Clone and setup application
cd /home/ec2-user
git clone https://github.com/your-username/100-backend-projects.git
cd 100-backend-projects/chat-app-backend-API

# Install dependencies
npm install

# Create systemd service
cat > /etc/systemd/system/${app_name}.service << EOF
[Unit]
Description=Chat App Backend
After=network.target

[Service]
Type=simple
User=ec2-user
WorkingDirectory=/home/ec2-user/100-backend-projects/chat-app-backend-API
ExecStart=/usr/bin/node server.js
Restart=always
Environment=NODE_ENV=production
Environment=PORT=5000

[Install]
WantedBy=multi-user.target
EOF

# Start service
systemctl daemon-reload
systemctl enable ${app_name}
systemctl start ${app_name}