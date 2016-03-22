

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var router = express.Router(); 
// Configuring Passport
/*var passport = require('passport');
app.use(cookieParser());
app.use(expressSession({
	secret: process.env.SESSION_SECRET || 'secret',
	resave: false,
	saveUninitialized: false
}));
//app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());*/


 // Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
/*var initPassport = require('./passport/init');
initPassport(passport);*/

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 var UserRoutes = require('./routes/users');//(passport);
 app.use('/users', UserRoutes);




 var gameRoutes = require('./routes/games');//(passport);
 app.use('/game', UserRoutes);


 var MetricRoutes = require('./routes/metric');//(passport);
 app.use('/game', MetricRoutes);





app.use('/', router);

app.listen(3000, function(){
   console.log('Listening on port 3000');
});

module.exports = app;