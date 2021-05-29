#!/bin/bash
echo "Start"
sudo ./build.sh
sudo docker run ng-micro-service:1.0 -p 6000:6000