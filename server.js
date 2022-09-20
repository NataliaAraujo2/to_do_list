const express = require("express");
const middleware = require("./middleware");
const server = express()

server.use(express.json());
server.use(middleware.Authenticate)

module.exports = server