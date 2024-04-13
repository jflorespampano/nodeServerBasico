var http = require('http');
var url = require('url');
var util = require('util');


const server = http.createServer(function (req, res) {
    
    // const miurl = new URL('http://localhost:3000' + req.url);
    // console.log('url trae:' + miurl.searchParams.get('nombre'));
    console.log(req.url);
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<h1>bienvenido a la raiz</h1>`, 'utf8', () => {
            console.log('enviando respuesta....');
        })
        return res.end();
    }
    if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('acerca de');
        return res.end();
    }
    res.end(util.inspect(url.parse(req.url, true)));
});
server.listen(3000);
console.log(`servidor corriendo en http://localhost:3000`);