'use strict';
const fs = require('fs');




exports.serviceHealthCheck = function(req, res) {
    
    return res.json({
        statusCode: 200,
        status: "Success",
        message: "REST API service is runninng"
    });    

}


exports.getAllMovies = function(req, res) {
    
	fs.readFile('movies.json', (err, data) => {
		if (err) throw err;
		let movies = JSON.parse(data);
		return res.json({
			statusCode: 200,
			status: "Success",
			queryData: movies
		});   
	});

}
