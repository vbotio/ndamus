//calling packages and define express app
var
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser');


//mongo configs
var mongoose   = require('mongoose');
mongoose.connect('mongodb://sa:doce2k!@ds113678.mlab.com:13678/ndamus'); //


//app configs
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(bodyParser.json());
app.use('/api', require('./app/routes/_config')); //register routes

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 8080;        // set our port
app.listen(port);
console.log('Magic happens on port ' + port);