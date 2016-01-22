'use strict'

const fs = require('fs')
const http = require('http')
const path = require('path')
const st = require('st')
const express = require('express')
const web = express()
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
const parser = require('body-parser')

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

web.use( parser.urlencoded({ extended: true }))
web.post('/enviar', function(req, res) {
	var auth = {
  auth: {
    api_key: 'key-4cec4805d46b7c935457f2c405b43f5f',
    domain: '1910-studios.com'
  }
}
	var nombre = req.body.nombre
	var mail = req.body.mail
	var mensaje = req.body.mensaje
	var nodemailerMailgun = nodemailer.createTransport(mg(auth));
	nodemailerMailgun.sendMail({
	  from: mail,
	  to: 'irae45@gmail.com', // An array if you have multiple recipients.
	  subject: '1910 Formulario',
	  text: 'Hey, ' + nombre + ' Tiene un mensaje: ' + mensaje
	}, function (err, info) {
	  if (err) {
	  	res.status(500).json({
	  		error: 'No fue posible enviar en estos momentos :('
	  	})
	    console.log('Error: ' + err);
	  }
	  else {
	  	res.status(200).json({
	  		message: 'Listo, mensaje enviado :)'
	  	})
	    console.log('Response: ' + info);
	  }
	});
})

function onListening() {
	console.log(`Servidor escuchando en el puerto: ${port}`)
}