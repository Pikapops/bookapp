
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var ip = process.env.PORT;
var port = process.env.IP;
var flash    = require('connect-flash');
var passport = require('passport');
var path = require('path'),
    fs = require('fs');
 var http = require('http')
var server = http.createServer(app)

require('./config/passport')(passport); 

// MongoDB

mongoose.connect('mongodb://Sophia:password@ds047742.mongolab.com:47742/books');
console.log(mongoose.connection.readyState);
setTimeout(function() {
console.log(mongoose.connection.readyState)},3000)

// Express
var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {

	app.use(cookieParser());
	app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
	app.use(express.static(path.join(__dirname, 'public')));
	app.set('views', __dirname + '/views');
	app.engine('html', require('ejs').renderFile);
	app.use(session({ secret: 'sophia' })); 
	app.use(passport.initialize());
	app.use(passport.session()); 
	app.use(flash()); 

};

// Routes
app.use('/api', require('./routes/api'));
require('./routes/routes.js')(app, passport,server); 

// Start server
app.listen(process.env.PORT, process.env.IP);
console.log('API is running on port 8080');
