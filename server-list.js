var express = require('express');
var app = express();
var fs = require("fs");

// Metodo get API
app.get('/listUsers', function (req, res) {
	fs.readFile(__dirname + "/json-data/" + "users.json", 'utf8', function (err, data) {
		console.log( data );
		res.end( data );
	});
})

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("APP funcionando")
})