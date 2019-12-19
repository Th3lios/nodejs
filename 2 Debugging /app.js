const http = require('http');

const express = require('express')
const app = express()

const routes = require('./routes')
const server = http.createServer(app)

app.use((req, res, next) => {
    console.log("bah");
    next(); // Allow the request to the next middleware
})

app.use((req, res, next) => {
    console.log("bah");
    res.setHeader
})

server.listen(3000);