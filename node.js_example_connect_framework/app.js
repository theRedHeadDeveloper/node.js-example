//this requires the "connect" framework
var connect = require('connect');
//this assigns the "connect" framework to the variable "app"
var app = connect();


//this requires the "http" core module and assigns it the variable "http"
var http = require('http');


//This is the function that will run first after the server is created
function runFirst(request, response, next){
    //Prints message to the console
    console.log("This is from the function 'runFirst'");
    //tells the program to call the next function in the "app" object
    next();
}
//this is the function that will run second after the server is created
function runSecond(request, response, next){
    //prints message to the console
    console.log("This is from the function 'runSecond'");
    //tells the program to call the next function in the "app" object
    next();
}

//this is a function that will run when the user enters "/forum" into the path
function forum(request, response){
    //prints message
    console.log("user requested 'forum'");
}

//This is a function that will run when the user enters "/profile" into the path
function profile(request, response){
    //prints message to the console
    console.log("user requested 'profile'");
}

//calls the "runFirst" function
app.use(runFirst);
//calls teh "runSecond" function
app.use(runSecond);

//calls the "forum" function when the user enters "/forum" into the path
app.use("/forum", forum);
//calls teh "profile" function when the user enters "/profile" into the path
app.use("/profile", profile);

//creats server and assigns it to port 8888
http.createServer(app).listen(8888);
//prints message after the server has been created
console.log("server is running....");