# Skipper Framework
# Created date: 4/10/2023

FROM gcr.io/tkpd-stag-kratos-003f/node:18-alpine

RUN apk update && apk add bash

# get args and env
# --build-arg NPM_TOKEN=<%= githubToken %>
# --build-arg PNPM_VERSION=$PNPM_VERSION
ARG PNPM_VERSION
ARG NPM_TOKEN
ENV KRATOS_DOCKER true

# Set creds and install pnpm
RUN printf "email=kratos.bot@tokopedia.com\n@tokopedia:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> /root/.npmrc
RUN npm i -g pnpm@${PNPM_VERSION}

# Move to default working directory
WORKDIR /code

# Copy scripts
COPY ./scripts scripts

# Install packages
COPY ./package.json package.json
COPY ./pnpm-lock.yaml pnpm-lock.yaml
RUN NODE_ENV=production pnpm install --frozen-lockfile --prod && pnpm store prune
RUN rm -rf /root/.npmrc

# Copy env
COPY ./.env .env
COPY ./.env.example .env.example

# To make sure symlink paths are not broken
COPY ./build build
COPY ./public public
COPY ./config config


EXPOSE 3000
ENV HOST=0.0.0.0

CMD ["node", "--no-experimental-fetch" ,"scripts/pm2/lite-pm2.js"]
