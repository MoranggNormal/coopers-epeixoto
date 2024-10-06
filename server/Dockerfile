FROM node:18-alpine as base
RUN apk add g++ make py3-pip libc6-compat
WORKDIR /server
COPY package*.json ./
EXPOSE 4001

FROM base as dev
ENV NODE_ENV=development
RUN npm install 

COPY . .

CMD npm run server