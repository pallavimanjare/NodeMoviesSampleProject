const express = require("express");
const router = express.Router();
const movieController = require('../controllers/movieController');


router.get('/', function(req, res) {
    
    return res.json({
        statusCode: 200,
        status: "Success",
        message: "API service is runninng"
    });    

});

router.get('/getAllMovies', movieController.getAllMovies);




module.exports = router;