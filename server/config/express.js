var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    path = require('path');

module.exports = function(app,config){
    //config
    app.set('view engine', 'ejs');
    app.set('views', config.rootPath + 'views');
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    //routing



};