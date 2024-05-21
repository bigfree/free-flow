FROM node:21.3-alpine As development
EXPOSE 3000

WORKDIR /usr/src/client
COPY --chown=node:node package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN yarn install

COPY --chown=node:node . .

CMD ["yarn", "dev"]