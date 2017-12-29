//includes the core module "http"
var http = require('http');

//creates a function that has two objects ("request"and"response") as its parameters
function onRequest(request, response) {
    //prints out the url requested by the client to the console
    console.log("User made a request", request.url);
    //displays "here is your data" to the browser
    response.writeHead(200, {"Context-Type": "text-plain"});
    response.write("Here is your data");
    //ends the interaction the client has with the server
    response.end;
}

//creates the server and assigns it to port "8888"
http.createServer(onRequest).listen(8888);
//prints "the server is running" to the console once the server has been created
console.log("The server is running");

