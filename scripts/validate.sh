#!/bin/bash
# Simple health check
if curl -s -f http://localhost; then
    echo "Site is running!"
else
    echo "Deployment failed! Site not reachable."
    exit 1
fi
