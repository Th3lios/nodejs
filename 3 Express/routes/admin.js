const express = require('express')
const router = express.Router()

// admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log("bah");
    res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Enviar</button></form>");
})

// admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
    //next(); Allow the request to the next middleware
})

module.exports = router