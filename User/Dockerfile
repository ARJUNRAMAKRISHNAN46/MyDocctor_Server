FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm install -g typescript

RUN npx tsc

EXPOSE 4002

CMD [ "npm", "start" ]
