    var express=require('express');
var Promise = require('bluebird');
var app        = express(); 
var mongoose   = require('mongoose');
var db= mongoose.connect('mongodb://localhost:27017/testnew1');
var User = require('.//models/user');
var Game = require('./models/game');
var Metric=require('./models/metric');
var Player=require('./models/player')
var playerMetric=require('./models/playerMetric')
//var User = mongoose.model('User', schema, 'users');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
var router = express.Router(); 

//bla bla
mongoose.Promise = Promise;
 

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});






router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});













//this route to get all the users


router.route('/users')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var user =  User.create(req.body, function (err, u) {
            if(err) return console.log(err);
            res.send(u);
        });      // create a new instance of the Bear model
        // user.firstname = .firstname;
        //  user.lastname = req.body.lastname;


        //  user.email = req.body.email;
        //  user.picture = req.body.picture;
        //    user.password = req.body.password; 
             // set the bears name (comes from the request)


        // save the bear and check for errors
        // user.save(function(err) {
        //     if (err)
        //         res.send(err);

        //     res.json(user);
        //     console.log(req.body);
        // });
        
    }).get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

    //route to get a specific user
router.route('/users/:user_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
        	
            if (err)
                res.send(err);
            res.json(user);
        });
    });

    //get a specfic game that the user created
router.route('/users/:user_id/game')

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
//get a specific game of the user

router.route('/users/:user_id/game/:game_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Game.findById(req.params.game_id, function(err, user) {
            
            if (err)
                res.send(err);
            res.json(user);
        });
    });
router.route('/users/:user_id/game/:game_id/metric')

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

router.route('/users/:user_id/game/:game_id/metric/:metric_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Metric.findById(req.params.metric_id, function(err, user) {
            
            if (err)
                res.send(err);
            res.json(user);
        });
    });
//creates new player with a post request

router.route('/users/:user_id/game/:game_id/player')

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

router.route('/users/:user_id/game/:game_id/player/:player_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Player.findById(req.params.player_id, function(err, user) {
            
            if (err)
                res.send(err);
            res.json(user);
        });
    });

//post the player metrics
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
    



app.use('/api', router);

module.exports=app;
// START THE SERVER
// =============================================================================
 app.listen(port);
console.log('Magic happens on port ' + port);