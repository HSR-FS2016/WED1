/**
 * Server configuration
 */
var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('handlebars');

var allowCrossDomain = function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, POST');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

var responseTemplate = handlebars.compile('<div class="success"><h2>Thank you {{name}}</h2><p>The following {{message-type}} was sent to us:</p><q>{{message}}</q></div>');

/**
 * Basic server
 */
var app = express();
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(__dirname + '/client'));


/**
 * API routes
 */
app.post('/submit', function(request, response) {
    response.write(responseTemplate(request.body));
    response.end();
});


/**
 * Server start
 */
var appPort = 8090;
app.listen(appPort);
console.log('Server running on http://localhost:'+appPort);
