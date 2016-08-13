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
 * car storage
 */
var stations = [
    {"name" : 'Zürich'},
    {"name" : 'Zürich, Bahnhofplatz'},
    {"name" : 'Zürich, Bahnhofstrasse'},
    {"name" : 'Zürich, Stadelhofen'},
    {"name" : 'Zürich, Enge'},
    {"name" : 'Zürich, Hardbrücke'},
    {"name" : 'Zürich, Oerlikon'},
    {"name" : 'Zürich, Flughafen'},
    {"name" : 'Zürich, Bürkliplatz ZSG'},
    {"name" : 'Dübendorf'},
    {"name" : 'Schwerzenbach'},
    {"name" : 'Uster'},
    {"name" : 'Uster, Bahnhof'},
    {"name" : 'Uster, Bildungszentrum'},
    {"name" : 'Uster, See'},
    {"name" : 'uster, Jugendhaus'},
    {"name" : 'Rapperswil'},
    {"name" : 'Rapperswil, ZSG'},
    {"name" : 'Rapperswil, Bahnhof'},
    {"name" : 'Rapperswil, Sonnenhof'},
    {"name" : 'Jona'},
    {"name" : 'Jona, Bahnhof'},
    {"name" : 'Jona, Kreuzberg'},
    {"name" : 'Bern'},
    {"name" : 'Bern, Bahnhof'},
    {"name" : 'Bern, Bundeshaus'},
    {"name" : 'Bern, Belp'},
    {"name" : 'Bern, Bahnhof Süd'},
    {"name" : 'Bern, Wankdorf'},
    {"name" : 'Lausanne'},
    {"name" : 'Lausanne, Bahnhof'},
    {"name" : 'Basel'},
    {"name" : 'Basel, Bahnhof'},
    {"name" : 'Basel, Gundeli'},
    {"name" : 'Basel, Aeschenplatz'},
    {"name" : 'Basel, Euroairport'},
    {"name" : 'Luzern'},
    {"name" : 'Luzern, Bahnhof'},
    {"name" : 'Luzern, Verkehrshaus'},
    {"name" : 'Luzern, Spital'},
    {"name" : 'Locarno'},
    {"name" : 'Locarno, Bahnhof'},
    {"name" : 'Locarno, Piazza'},
    {"name" : 'Lugano'},
    {"name" : 'Lugano, Bahnhof'},
    {"name" : 'Chur'},
    {"name" : 'Chur, Bahnhof'},
    {"name" : 'Olten'},
    {"name" : 'Olten, Bahnhof'},
    {"name" : 'Zug'},
    {"name" : 'Zug, Bahnhof'},
    {"name" : 'Zug, Metalli'},
    {"name" : 'Zug, Schwanenplatz'},
    {"name" : 'Interlaken West'},
    {"name" : 'Interlaken West, Bahnhof'},
    {"name" : 'Interlaken West, Casino'},
    {"name" : 'Interlaken Ost'},
    {"name" : 'Interlaken Ost, Bahnhof'},
    {"name" : 'Genf'},
    {"name" : 'Genf, Bahnhof'},
    {"name" : 'Genf, Flughafen'}
];

/**
 * Basic server
 */
var app = express();
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/client/'));


/**
 * API routes
 */
app.get('/suggestions', function(request, response) {
    response.json({suggestions: stations});
});


/**
 * Server start
 */
var appPort = 8080;
app.listen(appPort);
console.log('Server running on http://localhost:'+appPort);
