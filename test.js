var superagent = require('supertest');
var expect = require('expect.js');
var should         = require('should');
var app = require('./server.js');
var assert = require('assert');

var http = require('http');
  
describe('Placements route', function(){
    var url="http:localhost:3000";
  it('post object', function(done){
  
   request(url).post('/users')
      .send({ name: 'John'
        , email: 'john@rpjs.co',
        password:'2233'
      }) .end(function(err, res) {
                        if (err) {
                                throw err;
                        }
                        res.body.error.should.type('string');
                        done();
                });
        });

});
     