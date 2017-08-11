var express   = require('express'),
    app       = express(),
    request   = require('request'),
    router    = express.Router(),
    http_port = 3002;


// MIDDLEWARE
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// DEFAULT PAGE
app.get('/', function(req, res) {
    res.send('Return JSON or HTML View');
});


// USER
var user = require('./app/user/router.js');
app.use('/users', user);


// LISTEN PORT
app.listen(http_port, function() {
    console.log('Listening on port: ' + http_port);
});