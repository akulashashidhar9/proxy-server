#!/bin/bash

echo "provide name and name of image to build the container"

echo "name of container to keep"
read name 

echo "name of the image you want to build the container"
read name1


docker run -i -t -d --name $name -p 80:80 $name1


echo "done creating container......."

sleep 3

echo "containers "

docker ps -a 

echo "successfull execution......."
