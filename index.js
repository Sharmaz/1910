'use strict'

const fs = require('fs')
const http = require('http')
const path = require('path')
const st = require('st')
const express = require('express')
const web = express()
var server

const port = process.env.PORT || 8080

server = web.listen(port, onListening())

web.use('/static', express.static('static'))
web.use('/en', express.static('/public/en/template.html'))

web.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

function onListening() {
	console.log(`Servidor escuchando en el puerto: ${port}`)
}