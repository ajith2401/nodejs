const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Tye':'text/plain'});
    res.end('hello world')
}).listen(8080)