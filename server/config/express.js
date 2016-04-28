var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    passport = require('passport'),
    morgan = require('morgan'),
    flash = require('connect-flash');


module.exports = function(app,config){
    //config
    app.set('view engine', 'ejs');
    app.set('views', config.rootPath + 'views');
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(expressSession({
        secret:'secret',
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    var diObject = {
        passport: passport
    };

    return diObject;

};