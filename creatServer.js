const http = require('http');
const url = require('url');

const hostname = "127.0.0.1"
const port = "3000"

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    console.log(req.url);
    var data = {str:12345};
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(data));
})

server.listen(port,hostname,() => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
})