
ARG SERVER_PORT=4444

FROM node:20-alpine3.19 AS dependencies
WORKDIR /app
COPY /src/server/package*.json .
RUN npm clean-install --production --legacy-peer-deps
RUN npm install --production=false

FROM node:20-alpine3.19 AS builder
WORKDIR /app
COPY /src/server/ .
COPY --from=dependencies /app/node_modules ./node_modules

EXPOSE $SERVER_PORT

CMD ["npm", "run", "dev"]
