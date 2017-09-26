//var http = require('http');
//http.createServer(function(req,res){
//    res.writeHead(200,{'Content-Type':'text/plain'});
//    res.end('Hello World\n');
//}).listen(1337,'127.0.0.1');
//



const http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 3000;

const server = http.createServer(function(req, res){
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello node.js\n');
}).listen(3000,'127.0.0.1');

console.log('Server running at http://127.0.0.1:3000 ');

