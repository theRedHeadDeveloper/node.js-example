var movies = require('./movies');

var WendysMovies = movies();
WendysMovies.favMovies = "The Notebook";
console.log("Wendys favorite movie is", WendysMovies.favMovies);
