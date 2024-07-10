# FROM node:18-alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install

# RUN npm install typescript -g

# COPY . .

# RUN npm run build

# EXPOSE 4001

# CMD [ "npm", "start" ]



FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm install typescript

RUN npx tsc

EXPOSE 4001

CMD [ "npm", "start" ]
