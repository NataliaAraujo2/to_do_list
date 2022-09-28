FROM ubuntu:jammy

WORKDIR /app/to-do-list

ADD start.h /start.sh
COPY .  .

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install
RUN npm install -y express
RUN npm install -g knex


CMD ["/start.sh", "node","index.js"]


