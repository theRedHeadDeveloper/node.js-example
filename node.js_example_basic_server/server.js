console.log("run successful");


var http = require('http');

function onRequest(request, response) {
    console.log("User made a request", request.url);
    response.writeHead(200, {"Context-Type": "text-plain"});
    response.write("here is your data");
    response.end;
}

http.createServer(onRequest).listen(8888);
console.log("The server is running");