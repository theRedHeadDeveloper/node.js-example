//core modules are modules that are installed with node.js
//NOTE1: Core modules do not need the normal file path "./" indicatorer
//NOTE2: it is common practice to name the variable that stores the core module the same name as the file
var fs = require('fs');

fs.writeFileSync("bacon.txt", "bacon is good bacon is life");
console.log(fs.readFileSync("bacon.txt").toString());





//this is the core module used to work with paths
var path = require('path');
//this makes a variable with a random path as its value
var websiteHome = "Desktop/User//theredheaddev/index.html";
//This makes another variable with a random path as its value
var websiteAbout = "Desktop/User//theredheadddev/index.html";

//This uses the "path.normalize()" function to change the path stored in the variable that can be understood and fixes certain typos ("//theredheaddev")
console.log(path.normalize(websiteHome));
//this prints the directory of the file with out the file extension ("html")
console.log(path.dirname(websiteAbout));
//this prints the file name ("index.html")
console.log(path.basename(websiteAbout));
//this prints the extension name of the file (".html")
console.log(path.extname(websiteAbout));
//adds space
console.log('');






/*
//"setInterval" is a function that will run in a loop
//NOTE: "setTimeout" is a function that only runs one
setInterval(function () {
    console.log('beef');
}, 2000);
//adds space
console.log("");
*/






//this gives the directory of the current file ("Users/User/IdeaProjects/node.js_example_1")
console.log(__dirname);
//This gives the directory of the current file with the file name included ("Users/User/IdeaProjects/node.js/app.js")
console.log(__filename);
























