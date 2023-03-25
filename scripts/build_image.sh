#!/bin/bash

docker builder prune -af

docker system prune -af


echo "provide name to image"
read name

docker build -t $name .

echo "done building image...."

sleep 3

echo "showing the images..."

docker images

echo "successfull execution....."
