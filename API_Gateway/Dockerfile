FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm install typescript

RUN npx tsc

EXPOSE 8000

CMD [ "npm", "start" ]
