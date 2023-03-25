#!/bin/bash


echo "pushing image to the Docker hub"

echo "login docker hub"

docker login -u akulashashi -pawsdevops688@123

sleep 3

echo "taging the image"

echo "enter the name of the image to push to Docker Hub"
read name

echo "enter to version to the image"
read version

docker tag $name akulashashi/nginx-server:$version 


echo "images"

docker images

sleep 2

echo " pushing the image to Docker hub"

docker push akulashashi/nginx-server:$version

echo "done pushing to hub"

#echo "successff execution .."

sleep 2

echo "removeing the tagged image from the local"

docker rmi -f akulashashi/nginx-server:$version

echo "successfull..."
