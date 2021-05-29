#!/bin/bash
echo "Build"
sudo docker rmi ng-micro-service:1.0
sudo docker build -t ng-micro-service:1.0 -f docker/Dockerfile .
