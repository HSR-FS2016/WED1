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
    'Zürich',
    'Zürich, Bahnhofplatz',
    'Zürich, Bahnhofstrasse',
    'Zürich, Stadelhofen',
    'Zürich, Enge',
    'Zürich, Hardbrücke',
    'Zürich, Oerlikon',
    'Zürich, Flughafen',
    'Zürich, Bürkliplatz ZSG',
    'Dübendorf',
    'Schwerzenbach',
    'Uster',
    'Uster, Bahnhof',
    'Uster, Bildungszentrum',
    'Uster, See',
    'uster, Jugendhaus',
    'Rapperswil',
    'Rapperswil, ZSG',
    'Rapperswil, Bahnhof',
    'Rapperswil, Sonnenhof',
    'Jona',
    'Jona, Bahnhof',
    'Jona, Kreuzberg',
    'Bern',
    'Bern, Bahnhof',
    'Bern, Bundeshaus',
    'Bern, Belp',
    'Bern, Bahnhof Süd',
    'Bern, Wankdorf',
    'Lausanne',
    'Lausanne, Bahnhof',
    'Basel',
    'Basel, Bahnhof',
    'Basel, Gundeli',
    'Basel, Aeschenplatz',
    'Basel, Euroairport',
    'Luzern',
    'Luzern, Bahnhof',
    'Luzern, Verkehrshaus',
    'Luzern, Spital',
    'Locarno',
    'Locarno, Bahnhof',
    'Locarno, Piazza',
    'Lugano',
    'Lugano, Bahnhof',
    'Chur',
    'Chur, Bahnhof',
    'Olten',
    'Olten, Bahnhof',
    'Zug',
    'Zug, Bahnhof',
    'Zug, Metalli',
    'Zug, Schwanenplatz',
    'Interlaken West',
    'Interlaken West, Bahnhof',
    'Interlaken West, Casino',
    'Interlaken Ost',
    'Interlaken Ost, Bahnhof',
    'Genf',
    'Genf, Bahnhof',
    'Genf, Flughafen'
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
