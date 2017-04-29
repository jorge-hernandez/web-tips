var express = require('express');
var morgan = require('morgan');
var dishRouter = require('./api/dishRouter');
var promoRouter = require('./api/promoRouter');
var leaderRouter = require('./api/leaderRouter');

var app = express();
app.use(morgan('dev'));

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leadership', leaderRouter);

var hostname = 'localhost';
var port = 3000;
app.listen(port, hostname, function(){
    console.log('Server started at ' + hostname+ ':' + port);
});
