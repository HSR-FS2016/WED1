/**
 * Server configuration
 */
var express = require('express');
var bodyParser = require('body-parser');
var url = require("url");

var allowCrossDomain = function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

/**
 * Basic server
 */
var app = express();
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/app'));

/**
 * API routes
 */
var getCurrentTime = function (request, response) {
	var time = new Date();
	if(request.body.zone) {
		time = new Date(time.setHours(time.getHours() + parseInt(request.body.zone)));
	}
	response.format({
		'text/html': function () {
			response.contentType('text/plain');
			response.send(time.toString());
		},
		'application/json': function () {
			response.contentType('application/json');
			response.send(JSON.stringify({ time: time }));
		}
	});
};

app.all('/time', getCurrentTime);


/**
 * Server start
 */
var appPort = 8080;
app.listen(appPort);
console.log('Server running on http://localhost:'+appPort);
