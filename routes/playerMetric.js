var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();
var playerMetric = require('../models/playerMetric');




router.route('/playermetric')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    /*.post(function(req, res) {
        
        var playermetric =  playerMetric.create(req.body, function (err, u) {
            if(err) return console.log(err);
            res.send(u);


            playermetric.save(function(err) {
            if (err)
                res.send(err);

            res.json(req.body);
            console.log(req.body);
        })
        });
      
          })*/.get(function(req, res) {
        playerMetric.find(function(err, playermetric) {
            if (err)
                res.send(err);

            res.json(playermetric);
        });
    });


          router.route('/playermetric/:id')

    .get(function(req, res) {
        playerMetric.findById(req.params._id, function(err, playermetric) {
            
            if (err)
                res.send(err);
            res.json(playermetric);
        });
    });


   module.exports=router;
     





