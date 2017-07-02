var express = require('express')
var app = express()
var mongoose = require('mongoose')
var path = require('path')
require('dotenv').config()

var port = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URI)

app.use(express.static(path.resolve(__dirname, 'client')))

app.listen(port, function() {
    console.log('Listening on port ' + port)
})