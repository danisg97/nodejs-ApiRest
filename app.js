var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"), 			// Permite parsear JSON.
	methodOverride = require("method-override");   	// Permite implementar y personalizar métodos HTTP.
	mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

// Permite declarar rutas.
var router = express.Router();						

router.get('/', function(req, res) {
	res.send("Hello World!");
});

app.use(router);

app.listen(3000, function() {
	console.log("Node server running on http://localhost:3000");
});