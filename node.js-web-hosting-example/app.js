
var http = require('http');

var fs = require('fs');


function error404(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("error 404: Page not found");
    response.end();
}


function sendHtml(response, htmlPage){
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(htmlPage).pipe(response);
    console.log("User requested", htmlPage);
}


function onRequest(request, response){
    if (request.method === "GET") {
        switch (request.url) {
            case "/":
                sendHtml(response, "index.html");
               break;
            case "/projects":
                sendHtml(response, "projects.html");
                break;
            default:
                error404(response);
                break;
        }
    }
}

http.createServer(onRequest).listen(9000);
console.log("server is running.....");