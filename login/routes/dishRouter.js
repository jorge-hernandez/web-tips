var express =  require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Dishes = require('../models/dishes');
var Verify = require('./verify');

module.exports =  dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.get(Verify.verifyOrdinaryUser, function(req, res, next){
    res.end('Getting all dishes');
})
.post(Verify.verifyOrdinaryUser, function(req, res, next){
    res.write('Creating a dish with name:  ' + req.body.name);
    res.end(' and description: ' + req.body.description);
})
.put(function(req, res, next){
    res.end('Updating all dishes');
})
.delete(Verify.verifyOrdinaryUser, function(req, res, next){
    res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all(function(req, res, next){
    res.writeHead(200,{"Content-Type":"text/html"});
    next();
})
.post(function(req, res, next){
    res.end('Operation not supported on dishes');
})
.get(function(req, res, next){
    res.end('Reading the dish: ' + req.params.dishId );
})
.put(function(req, res, next){
    res.write('Updating the dish ' + req.params.dishId);
    res.write(' with name: ' + req.body.name );
    res.end(' width details: ' + req.body.description);
})
.delete(function(req, res, next){
    res.end('Deleting dish: ' + req.params.dishId);
});
