var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();
var User = require('../models/user');
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure we go to the next routes and don't stop here
// });


var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}






// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

//module.exports = function(passport){

router.route('/')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        
        var user = User.create(req.body, function (err, u) {
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



    router.route('/users/:user_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        User.findById(req.params.user_id, function(err, user) {
            
            if (err)
                res.send(err);
            res.json(user);
        });
    });

   /* router.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash : true  
    }));
 }*/

module.exports = router;