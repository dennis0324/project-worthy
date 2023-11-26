FROM node:21 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package*.json .

RUN npm install -g @nestjs/cli
RUN npm install --production=true

RUN apt-get -q update && apt-get -qy install netcat-traditional

COPY . .

RUN npm run build


CMD [ "sh", "-c", "npm typeorm migration:run && npm run start:prod"]