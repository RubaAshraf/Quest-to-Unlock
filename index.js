
var mongoose = require('mongoose');
// var schema = require('./user');
// var schema = require('./game');
var schema = require('./models/metric');
mongoose.connect('mongodb://localhost:27017/testnew1');
var Metric = mongoose.model('Metric', schema, 'metrics');



var metric = new Metric({ 
             name: "experience"
            , description: "this is a game learninig coding"
            ,type:"point"
            ,constraints:{
            	min:"60",
            	max:"70"
            },
            gameId:"56c5295b0fe5b07f08ba1d91"
        });

metric.save(function(error) {
  if (error) {
    console.log(error);
    process.exit(1);
  } Metric.find({}, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(require('util').inspect(docs));
    process.exit(0);
  });
});