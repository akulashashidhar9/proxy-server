#!/bin/bash

# default name of the container is shashi and will stop the container

sudo systemctl status nginx

docker images

docker ps -a

docker stop shashi

echo "enter the old version of the image to remove :"
read old

docker rmi akulashashi/nginx-server:$old

docker builder prune -af

docker system prune -af

echo "enter the new version of the image to pull from docker hub :"
read new

docker pull akulashashi/nginx-server:$new

docker images

echo "creating container new container :"

docker run --rm -i -t -d --name shashi -p 8080:80 akulashashi/nginx-server:$new

docker ps -a

sudo systemctl restart nginx

echo "successfull...."



