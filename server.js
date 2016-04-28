var express = require('express'),
    path = require('path'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express(),
    port = 1337;

//snag config
var config = require('./server/config/config')[env];

//init mongoose
require('./server/config/mongoose')(config);

//init express
var diObject = require('./server/config/express')(app,config);

//init passport
require('./server/config/passport')(diObject.passport);

//init routes, which init controllers, which init models
require('./server/config/routes')(app,diObject.passport);

console.log(config);

app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname, 'client')));

app.listen(port, function(){
    console.log('ready on port ' + port);
});