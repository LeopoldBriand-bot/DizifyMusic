FROM node:alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm ci

COPY . /app

CMD ["npm", "run", "start"]