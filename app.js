var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); //not installed
var app = express();
var router = require('./server/routes.js');
var mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost:27017');

//check out passportjs

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'client/views'));

//middleware
app.use('/',router);

//app.use(bodyParser.json());
//app.use(bodyParser().urlencoded);
app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname, 'client')));




//init
app.listen(1337, function(){
	console.log('ready on port 1337');
});