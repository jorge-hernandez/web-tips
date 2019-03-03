var express = require('express');
var bodyParser = require('body-parser');

module.exports = promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/html'});
    next();
})
.get(function(req, res, next){
    res.end('Read all promos');
})
.post(function(req, res, next){
    res.end('Create all promos');
})
.put(function(req, res, next){
    res.end('Update all promos');
})
.delete(function(req, res, next){
    res.end('Delete all promos');
});

promoRouter.route('/:promoId')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/html'});
    next();
})
.get(function(req, res, next){
    res.end('Read promo: ' + req.params.promoId);
})
.post(function(req, res, next){
    res.end('Create promo: ' + req.params.promoId +
            ' with name ' + req.body.name +
            ' and description ' + req.body.description);    
})
.put(function(req, res, next){
    res.end('Update promo: ' + req.params.promoId +
            ' with name ' + req.body.name +
            ' and description ' + req.body.description);
})
.delete(function(req, res, next){
    res.end('Delete promo: ' + req.params.promoId);
});