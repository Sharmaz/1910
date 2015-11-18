'use strict'

const fs = require('fs')
const http = require('http')
const path = require('path')
const st = require('st')


const port = process.env.PORT || 8080

const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

const mount = st({
	path: path.join(__dirname, '.', 'public'),
	index: 'index.html'
})

function onRequest (req, res) {
	mount(req, res, function(err) {
		if (err) return res.end(err.message)

		res.statusCode = 404
		res.end(`Not Found ${req.url}`)
	})
}

function onListening() {
	console.log(`Servidor escuchando en el puerto: ${port}`)
}