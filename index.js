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
web.use('/files', express.static('files'))

web.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})
web.get('/rocket-willie', function(req, res) {
	res.sendFile(__dirname + '/public/rocket.html')
})
web.get('/en/template.html', function(req, res) {
	res.sendFile(__dirname + '/public/en/template.html')
})
web.get('/es/template.html', function(req, res) {
	res.sendFile(__dirname + '/public/es/template.html')
})


function onListening() {
	console.log(`Servidor escuchando en el puerto: ${port}`)
}