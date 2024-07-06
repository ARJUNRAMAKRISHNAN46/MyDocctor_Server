FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 4008

CMD [ "npm" , "run" , "dev" ]