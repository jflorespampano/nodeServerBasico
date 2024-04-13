const http = require('http');
const fs = require('fs');
// var querystring = require('querystring');
// const { brotliDecompressSync } = require('zlib');

http.createServer((req, res) => {
    if (req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('./formulario.html', 'UTF-8').pipe(res);
    } else if (req.method == 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // let s = 'http://localhost:3000?' + body;
            // console.log('s=', s);
            // const miurl = new URL(s);
            const miurl = new URL('http://localhost:3000?' + body);
            console.log('nombre trae:' + miurl.searchParams.get('nombre'));
            res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>persona</title>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
            </head>

            <body>
                <div class="w3-container w3-padding">
                    <div class="w3-panel w3-card w3-padding" style="width:50%; margin:auto">
                        <h3>Uted envio esto</h3>
                        <p>id:${miurl.searchParams.get('id')}</p>
                        <p>nombre:${miurl.searchParams.get('nombre')}</p>
                        <p>edad:${miurl.searchParams.get('edad')}</p>
                    </div>
                </div>
            </body>

            </html>
            `);
        });

    }
}).listen(3000);

const amarillo='\x1b[33m'
const blanco='\x1b[0m'
console.log(`Servidor corriendo en: ${amarillo}http://localhost:3000${blanco} ... ^c para detenerlo.`);
