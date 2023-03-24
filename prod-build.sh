#!/usr/bin/env bash

docker run --rm -v "$PWD":/app -w /app --platform linux/amd64 node:latest npm install && \
docker run --rm -v "$PWD":/app -w /app --platform linux/amd64 node:latest npm run build

cp -rf dist/assets ../public
cp dist/index.html ../public/web.html
