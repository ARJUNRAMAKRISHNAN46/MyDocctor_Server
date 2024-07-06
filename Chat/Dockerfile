FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 4007

CMD [ "npm" , "run" , "dev" ]