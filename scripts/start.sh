#!/bin/bash
# Create folder if it doesn't exist
mkdir -p /var/www/myportfolio
cd /var/www/myportfolio

# Copy repo files if first deployment (optional safety)
# This is handled by CodeDeploy normally

# Install npm packages
if [ -f package.json ]; then
    npm install
    npm run build
    pm2 start npm --name "portfolio" -- start
else
    echo "package.json not found! Deployment failed."
fi
