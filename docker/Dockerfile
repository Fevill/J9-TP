FROM node:12-alpine

WORKDIR /app

COPY ./micro-service/src ./src
COPY ./micro-service/package.json ./

RUN npm install
EXPOSE 6000
CMD ["npm","start"]
