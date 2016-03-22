var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var router = express.Router();
var User = require('../models/user');
var Player = require('../models/player');

 