var express = require('express'),    
	app     = express(),         
	router  = express.Router(),  
	request = require('request'); // proxy: require('request').defaults({'proxy': 'proxy-address'});

var userListUrl = "http://jsonplaceholder.typicode.com/users";

exports.getUserList = function(req, res) {
	
	request.get(userListUrl, function(err, resp, body){
		if(err) return res.end(err.message);
		res.send(body);
	}).on('error', function(e){
		console.log(e)
	}).end()

};

exports.getUserDetail = function(req, res) {

	request.get(userListUrl +"/" + req.params.id, function(err, resp, body){
		if(err) return res.end(err.message);
		res.send(body);
	}).on('error', function(e){
		console.log(e)
	}).end()

}
