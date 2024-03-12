FROM node:alpine

WORKDIR /client

COPY package.json /client/

RUN npm install --force

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]