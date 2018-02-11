// const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./app/routes')

//set port
const port = 8080

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

//register routes
app.use(router)

//need a listener pick a port number
app.listen(port || 8080, () => {
    console.log(`server started on ${port}`);
})

