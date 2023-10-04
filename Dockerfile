# Skipper Framework
# Created date: 4/10/2023

FROM node:18-alpine

RUN apk update && apk add bash

# Move to default working directory
WORKDIR /code
COPY ./package.json package.json
COPY ./pnpm-lock.yaml pnpm-lock.yaml

# Copy scripts
COPY ./scripts scripts

# Install packages
COPY ./package.json package.json
COPY ./pnpm-lock.yaml pnpm-lock.yaml

# Copy env
COPY ./.env .env
COPY ./.env.example .env.example

# To make sure symlink paths are not broken
COPY ./build build
COPY ./public public
COPY ./config config
COPY ./node_modules node_modules


EXPOSE 3000
ENV HOST=0.0.0.0

CMD ["node", "--no-experimental-fetch" ,"build/server/index.js"]
