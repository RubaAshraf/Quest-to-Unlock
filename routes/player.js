var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();
var User = require('../models/user');
var Player = require('../models/player');

 router.route('/:game_id/player')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res, next) {
        
        var player= new Player();      // create a new instance of the Bear model
        player.name = req.body.name;
        player.gid=req.params.game_id;
         
             // set the bears name (comes from the request)
         
             console.log(req.body);

        // save the bear and check for errors
        player.save(function(err,play) {
            if (err)
                res.send(err);



            Promise.fulfilled()
            .then(function () {


                return Metric.find().where("gameId",req.params.game_id).exec()
            }).then(function (metrics) {

               console.log("metric: ", metrics);
                    var ms = metrics.map(function (metric) {
                        console.log("PMS1: ", metric._id);
                        //var playermetric =  playerMetric.create({ player:player.id, metric:metric._id});
                        //var playermetric =playerMetric.collection.insert({ player:player.id, metric:metric._id});
                      // return playerMetric.create({ player:player.id, metric:metric._id});
                       // var metric = playerMetric.create({ player:player.id, metric:metric._id});
                       var playermetric= new playerMetric();
                       playermetric.player=player.id;
                       playermetric.metric=metric._id
                       //console.log(metric);
                        console.log("pmetrics: ",playermetric);
                        //metric.save();
                        //console.log(metric);
                        return  playermetric;
                    })
                    
                    console.log("PMS: ", ms);
                    return ms;
                   
            }).then(function (playermetric) {
                res.json({
                    player: play,
                    playerMetric: playermetric
                });
            }).catch(next)







        });

      
                
        
    }).get(function(req, res) {
    Player.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
             
        });
    });

    //get a single player with id

router.route('/:game_id/player/:player_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Player.findById(req.params.player_id, function(err, user) {
            
            if (err)
                res.send(err);
            res.json(user);
        });
    });
