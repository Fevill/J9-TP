#!/bin/bash
echo "Start"
sudo ./build.sh
sudo docker run -p 6000:6000 ng-micro-service:1.0 