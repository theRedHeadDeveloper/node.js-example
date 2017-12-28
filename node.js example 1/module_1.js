//this is a module
//A module is a piece of javascript code that will be used in the main app ("app.js")
//when a module is made, the program automatically has an object "module.exports" by default.
//The default value for module.exports" isn equal to a blank object (module.exports = {})

//This module exports code one at a time




//this is the code that will be exported to "app.js"
function print1() {
    console.log("this came from module_1. function = 'print1'");
}
function print2() {
    console.log("This came from module_1. function = 'print2'");
}
//this tells the program to send the function "print1" when a request to export from this file ("module_1")is made
module.exports.print1 = print1();
//This tells the program to send the function "print2" when a request to exportt from this file ("module_1") is made
module.exports.print2 = print2();



