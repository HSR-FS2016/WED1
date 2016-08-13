const http = require('http');
const fs = require('fs');
const url = require('url');


const hostname = '127.0.0.1';
const port = 3000;

var registrations = [];
registrations.push("Michael");
registrations.push("Silvan");


function serverHandler(request, response) {
    console.log(request.url);
    if (request.url == "/") {
        fs.readFile("./index.html", function (err, cont) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(cont);
        });
    }
    else if(request.url == "/party.gif"){
        fs.readFile("./assets/party.gif", function (err, cont) {
            response.writeHead(200, {'Content-Type': 'image/gif'});
            response.end(cont);
        });
    }
    else if(request.url == "/members"){
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({members : registrations}));
    }
    else if(request.url.startsWith("/new")){
        fs.readFile("./templates/new.html", {encoding: "UTF-8"},  function (err, cont) {
            var name = url.parse(request.url, true).query["name"];
            registrations.push(name);

            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(cont.replace("{{name}}", name));
        });
    }
    else{
        var assetUrl = "./assets"+request.url;
        fs.exists(assetUrl, function(exists) {
                if (exists) {
                    fs.readFile(assetUrl,  function (err, cont) {
                        response.end(cont);
                    });
                }
                else {
                    console.log(request.url);
                    response.statusCode = 404;
                    response.end("not found");
                }
            }
        );
    }
}
const server = http.createServer(serverHandler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});