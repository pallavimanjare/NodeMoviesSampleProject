'use strict';
const fs = require('fs');




exports.getAllMovies = function(req, res) {
    
	fs.readFile('movies.json', (err, data) => {
		if (err) throw err;
		let movies = JSON.parse(data);
		return res.json({
			movies
		});   
	});

}

exports.getMovieById = function(req, res) {
	
	const movies  = JSON.parse(fs.readFileSync('movies.json', 'utf8'));
	var array = movies.movies;
	var movie = getData(array , req.params.id);
	
	return res.json({
		movie
	});   

}
//TODO later code refractoring needs to be done.no need of loop.using library directly apply filter on array
function getData (movies,id) { 
	
	

	   for(var movie in movies) { 
		
		var movieData = movies[movie];
		console.log('movieData as :' +JSON.stringify(movieData));
		if(movieData.id == id){
			return movieData;
		}
		   
	     
	   }
	}