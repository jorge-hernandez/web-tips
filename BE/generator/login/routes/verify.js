var User = require('../models/user');
var jwt = require('jsonwebtoken'); //used to create, sign and verify tokens
var config = require('../config.js');
var passport = require('passport');

exports.getToken = function(user){
    return jwt.sign(user, config.secretKey, {
       expiresIn: 3600
    });
};

exports.verifyOrdinaryUser = function(req, res, next){
//check header or url parameters on post parameters for tokens
var token = req.body.token || req.query.token || req.headers['x-access-token'];
//decode token
if(token) {//verifies secret an checs export
  jwt.verify(token, config.secretKey, function(err, decoded){
    if(err || !req.isAuthenticated()) {
      var err = new Error('You are not aunthenticated!');
      err.status = 401;
      return next(err);
    }else {
      //if everything is good, save to... other routes
      req.decoded = decoded;
      next();
    }
  });
  } else {
    // if there is no token return an Error
    var err = new Error('No token provided!');
    err.status = 403;
    return next(err);
  }
};
