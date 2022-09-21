FROM ubuntu:jammy

WORKDIR /app/to-do-list

COPY .  .

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN npm install

CMD ["node","index.js"]


