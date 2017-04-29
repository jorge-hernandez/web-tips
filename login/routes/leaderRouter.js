var express = require('express');
var bodyParser = require('body-parser');

module.exports = leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/html'});
    next();
})
.get(function(req, res, next){
    res.end('Read all leaders');
})
.post(function(req, res, next){
    res.end('Creating all leaders');
})
.put(function(req, res, next){
    res.end('Updating all leaders');
})
.delete(function(req, res, next){
    res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/html'});
    next();
})
.get(function(req, res, next){
    res.end('Read leader: ' + req.params.leaderId);
})
.post(function(req, res, next){
    res.end('Create leader: ' + req.params.leaderId +
            ' with name: ' + req.body.name +
            ' and description ' + req.body.description);
})
.put(function(req, res, next){
    res.end('Update leader: ' + req.params.leaderId +
            ' with name: ' + req.body.name +
            ' and description ' + req.body.description);
})
.delete(function(req, res, next){
    res.end('Delete leader: ' + req.params.leaderId);
});
