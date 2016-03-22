var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();
var User = require('../models/user');
var Game= require ('../models/game');



router.route('/:user_id')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var  game = new Game();      // create a new instance of the Bear model
        game.gname = req.body.gname;
         game.gdescription = req.body.gdescription;


         game.gpass = req.body.gpass;
         game.Createdby = req.params.user_id;
         console.log(req.params.user_id);
           
             // set the bears name (comes from the request)

             console.log(req.body);

        // save the bear and check for errors
        game.save(function(err) {
            if (err)
                res.send(err);

            res.json(req.body);
            console.log(req.body);
        });
        
    }).get(function(req, res) {
        Game.find(function(err, games) {
            if (err)
                res.send(err);

            res.json(games);
        });
    });
router.route('/:user_id/:game_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Game.findById(req.params.game_id, function(err, user) {
            
            if (err)
                res.send(err);
            res.json(user);
        });
    });


module.exports = router;