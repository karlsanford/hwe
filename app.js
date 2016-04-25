var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var passport = require('passport');
var passportLocal = require('passport-local');
var mongoose = require('mongoose');
var expressSession = require('express-session');


module.exports = function(app,config){
	//config
	app.set('view engine', 'ejs');
	app.set('views', config.rootPath + 'client/views');
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(expressSession({
		secret: process.env.SESSION_SECRET || 'secret',
		resave: false,
		saveUninitialized: false
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	//static routing
	app.use(express.static(config.rootPath + 'bower_components'));
	app.use(express.static(config.rootPath +  'client'));

};

//connect to db
mongoose.connect('mongodb://localhost:27017');







passport.use(new passportLocal.Strategy(function(username, password, done){
	if(username === password) {
		done(null, { id: username, name: username });
	} else {
		done(null,null);
	}

	if(false){
		done(new Error('ouch!'));
	}

}));
passport.serializeUser(function(user, done){
	done(user.id);
});

passport.deserializeUser(function(id,done){
	//query db
	done({id: id, name:id});
})

//configure app


//middleware




// must be after body-parser
var router = require('./server/routes.js');
app.use('/',router);
//app.use(bodyParser.json());
//app.use(bodyParser().urlencoded);






//init
app.listen(1337, function(){
	console.log('ready on port 1337');
});