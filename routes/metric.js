var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();
var User = require('../models/user');
var Game= require ('../models/game');
var Metric= require ('../models/Metric');




router.route('/:game_id/metric')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var metric = new Metric();      // create a new instance of the Bear model
        metric.name = req.body.name;
         metric.description = req.body.description;


         metric.type = req.body.type;
         
         metric.constraints = req.body.constraints;
           metric.gameId = req.params.game_id; 
             // set the bears name (comes from the request)

             console.log(req.body);

        // save the bear and check for errors
        metric.save(function(err) {
            if (err)
                res.send(err);

            res.json(req.body);
            console.log(req.body);
        });
        
    }).get(function(req, res) {
        Metric.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });



    module.exports=router;