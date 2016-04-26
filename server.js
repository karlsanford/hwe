var express = require('express'),
    path = require('path'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    app = express();

var config = require('./server/config/config')[env];

//init express
require('./server/config/express')(app,config);

//init mongoose
require('./server/config/mongoose')(config);

//init routes, which init controllers, which init models
require('./server/config/routes')(app);

console.log(config);

app.use(express.static(path.join(__dirname,'bower_components')));
app.use(express.static(path.join(__dirname, 'client')));

app.listen(1337, function(){
    console.log('ready on port 1337');
});