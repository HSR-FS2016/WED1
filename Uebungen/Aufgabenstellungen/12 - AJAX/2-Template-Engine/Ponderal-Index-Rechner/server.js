/**
 * Server configuration
 */
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET');
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
app.post('/ponderal', function (request, response) {
	if(request.body.weight && request.body.height) {
		var height = request.body.height;
		var weight = request.body.weight;
		var ponderal = (weight / Math.pow(height,3)).toFixed(1);
		var limits = {
			moderatelyObese: (19.5*Math.pow(height,3)).toFixed(1),
			overWeight: (16.5*Math.pow(height,3)).toFixed(1),
			maximalWeight: (14*Math.pow(height,3)).toFixed(1),
			minimalWeight: (11*Math.pow(height,3)).toFixed(1),
			underWeight: (9.5*Math.pow(height,3)).toFixed(1),
			severelyUnderweight: (9*Math.pow(height,3)).toFixed(1)
		};

		response.json({
			ponderal: ponderal,
			weight: weight,
			height: height,
			limits: [
				{ name: "Severely underweight", min: limits.severelyUnderweight, max: limits.underWeight, status: 'bad' },
				{ name: "Underweight", min: limits.underWeight, max: limits.minimalWeight, status: 'problematic' },
				{ name: "Normal weight", min: limits.minimalWeight, max: limits.maximalWeight, status: 'ok' },
				{ name: "Overweight", min: limits.maximalWeight, max: limits.overWeight, status: 'problematic' },
				{ name: "Moderately obese", min: limits.overWeight, max: limits.moderatelyObese, status: 'bad' }
			]
		});
	} else {
		response.status(400).send('weight or height missing');
	}
});


/**
 * Server start
 */
var appPort = 8050;
app.listen(appPort);
console.log('Server running on http://localhost:'+appPort);
