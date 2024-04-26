FROM node:alpine as builder

WORKDIR /client

COPY package.json package-lock.json /client/

RUN npm install --force

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /client

RUN npm install -g serve
# RUN npm install react-scripts --global

COPY --from=builder /client/build ./build
COPY --from=builder /client/package.json ./package.json

EXPOSE 3000

CMD ["serve", "-s", "build"]
