var express    = require('express'),    
	app        = express(),         
	router     = express.Router(),  
	request    = require('request');
	controller = require('./controller.js');


// ROUTES
router.get('/', controller.getUserList);
router.get('/:id', controller.getUserDetail);


// define the about route
router.get('/about', function (req, res) {
  res.send('Kullanıcılar hakkında');
});


module.exports = router;

