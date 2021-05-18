const cors = require('cors');
const express = require('express');


const app = express();
var bodyParser = require('body-parser');

//var db = require('./models');
var routes = require('./api/routes/apiRoutes');





// Sets up the Express app to handle data parsing
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.use('/', routes);

app.use((req, res, next) => {
	  const error = new Error("Not found");
	  error.status = 404;
	  next(error);
	});

	app.use((error, req, res, next) => {
	  res.status(error.status || 500);
	  res.json({
	    error: {
	      message: error.message
	    }
	  });
	});

	module.exports = app;