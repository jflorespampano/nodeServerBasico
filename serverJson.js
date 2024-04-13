const http = require("http");
//var url = require('url');
//var util = require('util');
const host = 'localhost';
const fs = require('fs').promises;

const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/alumnos":
            fs.readFile(__dirname + "/personas.json")
                .then(contents => {
                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    //res.end(util.inspect(url.parse(req.url, true)));
                    res.end(contents);
                });
            break;
        case "/carreras":
            fs.readFile(__dirname + "/carreras.json")
                .then(contents => {
                    res.setHeader("Content-Type", "application/json");
                    res.writeHead(200);
                    res.end(contents);
                });
            break
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`servidor corriendo en http://${host}:${port}`);
});