FROM node:10-alpine as build
WORKDIR /skeleton-api
COPY package.json yarn.lock tsconfig.json ./
RUN ["yarn"]
COPY ./src ./src
RUN ["yarn", "build"]

FROM node:10-alpine
WORKDIR /skeleton-api
COPY package.json yarn.lock ./
RUN ["yarn", "--production"]
COPY --from=build /skeleton-api/dist ./dist
RUN ["node", "dist/server.js"]

