var request = require('supertest');
var expect = require('expect.js');
var should         = require('should');
var app = require('../server.js');
var assert = require('assert');
var mongoose = require('mongoose');

var http = require('http');

before(function (done) {
  mongoose.connect('mongodb://localhost:27017/testnew1', done);
})

describe('Placements route', function(){
  it('post object', function(done){
  
   request(app).post('/api/users')
      .send({ firstname: 'John',
        lastname: 'sss'
        , email: 'john@rpjs.co',
        password:'2233'
      }) .end(function(err, res) {
                        if (err) {
                                throw err;
                        }
                        assert.equal(200, res.status)
                        console.log(res.body.firstname);
                        assert.equal(res.body.firstname, 'John');

                        done();
                });
        });

});
     