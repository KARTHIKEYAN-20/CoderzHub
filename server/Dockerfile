FROM node:alpine

WORKDIR /server

COPY package.json /server/

WORKDIR /server

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm", "start"]