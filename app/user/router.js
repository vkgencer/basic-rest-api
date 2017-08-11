var express    = require('express'),    
	app        = express(),         
	router     = express.Router(),  
	request    = require('request');
	controller = require('./controller.js');


// ROUTES
router.get('/', controller.getUserList);
router.get('/:id', controller.getUserDetail);


router.get('/about', function (req, res) {
  res.send('About');
});


module.exports = router;

