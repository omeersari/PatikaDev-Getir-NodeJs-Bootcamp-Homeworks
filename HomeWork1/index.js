const http = require('http');
const fs = require('fs');

const myDate = new Date();

const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    } else {
        if (req.url === '/') {
            res.write('Welcome to homepage')
        }
        else if (req.url === '/about') {
            res.write('Welcome to about page.')
        }
        else if (req.url === '/champion') {
            res.write('TRABZONSPOR !!!')
        }else {
            res.write('404 NOT FOUND')
        }
        let log = `Date: ${myDate}, Request method and url: ${req.method}: ${req.url}, Respond status: ${res.statusCode}, Request Header: ${JSON.stringify(req.headers)} \n`;
        fs.appendFile('logFile.log', log, 'utf8', (err) => {
        if (err) {
            console.log(`error happened: ${err}`)
        }
    })
    }
    
    res.end()
})


server.listen(6161)