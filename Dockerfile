FROM node:alpine3.12

WORKDIR /app

COPY micro-service/src/* /app
COPY micro-service/package.json /app

RUN npm install

CMD ["npm","start"]