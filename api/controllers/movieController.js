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
    
	fs.readFile('movies.json', (err, data) => {
		if (err) throw err;
		let movies = JSON.parse(data);
		return res.json({
			movies
		});   
	});

}
