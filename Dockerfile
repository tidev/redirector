FROM node:24-alpine

WORKDIR /app
COPY . /app

ENV NODE_ENV production
EXPOSE 80/tcp
CMD [ "npm", "start" ]
