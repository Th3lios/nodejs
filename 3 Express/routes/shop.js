const express = require('express')
const routes = express.Router()

routes.get('/', (req, res, next) => {
    console.log("bah");
    res.send("<h1>You are in!</h1>")
})

module.exports = routes