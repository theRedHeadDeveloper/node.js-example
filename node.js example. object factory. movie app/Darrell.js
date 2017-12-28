var movies = require('./movies');

var DarrellsMovies = movies();
DarrellsMovies.favMovies = "Spiderman homecoming";
console.log("Darrells favorite movie is", DarrellsMovies.favMovies);
