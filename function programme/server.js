var http = require("http");
var url = require("url");
function start (route,handle){
    var count = 0;
    function onRequest(request,reponse){
        console.log(count++ +'#:')
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + 'recived');
        route(handle,pathname); //来源于上面的start函数

        reponse.writeHead(200);
        reponse.write("Hello Word!");
        reponse.end();
    }
    http.createServer(onRequest).listen(3000);
    console.log("Server has started")
}
exports.start = start;