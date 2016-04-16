var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware

app.use(bodyParser());
app.use(express.static(path.join(__dirname,'bower_components')));

//routes
app.get('/',function(req,res){
	res.render('index');
});

app.get('/raw',function(req,res){
	res.send('hello express!');
});

app.get('/users/:id',function(req,res){
	res.send('you typed ' + req.params.id);
});

app.listen(1337, function(){
	console.log('ready on port 1337');
});