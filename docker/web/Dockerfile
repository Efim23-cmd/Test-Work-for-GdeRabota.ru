ARG CLIENT_PORT=3333

FROM node:20-alpine3.19 AS dependencies
WORKDIR /app
COPY /src/web/package*.json .
RUN npm install --production=false

FROM node:20-alpine3.19 AS builder
WORKDIR /app
COPY /src/web/ .
COPY --from=dependencies /app/node_modules ./node_modules

EXPOSE $CLIENT_PORT

CMD ["npm", "run", "dev"]

