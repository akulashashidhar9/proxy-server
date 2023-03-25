#!/bin/bash

sudo systemctl status nginx


docker builder prune -af

docker system prune -af

echo "enter the version of the image to pull from docker images :"
read version

docker pull akulashashi/nginx-server:$version

echo "building the container from the image"

docker run --rm -i -t -d --name shashi -p 8080:80 akulashashi/nginx-server:$version

docker images

docker ps -a

sudo systemctl restart nginx



echo "successfull....."


