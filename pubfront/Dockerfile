FROM node:21 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --production=false

COPY ./ ./

RUN npm run build


# CMD [ "node", "server.js"]
CMD [ "ls"]
