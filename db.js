var assert = require('assert');
var mongoose   = require('mongoose');
var db= mongoose.connect('mongodb://localhost:27017/testnew2');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

module.exports = db;

