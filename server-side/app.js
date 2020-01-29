const http = require('http');
const helloWorld = require('./hello').helloWorld

const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(8003, hostname, () => {
    console.log("listenning at port 8003.............")
    helloWorld();
});