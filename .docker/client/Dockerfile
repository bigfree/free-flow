FROM node:21.3-alpine
EXPOSE 3000

WORKDIR /usr/src/client
COPY --chown=node:node package*.json ./

RUN yarn install
COPY --chown=node:node . .

CMD ["yarn", "dev"]