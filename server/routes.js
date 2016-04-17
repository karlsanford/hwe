var express = require('express'),
	router	= express.Router(),
	bodyParser = require('body-parser'),
	app = express();

//static data
var meetups = [
	{id:1, name:'foo'},
	{id:2, name: 'bar'},
	{id:3, name: 'naz'}
];

//middle ware
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


//routes
router.get('/',function(req,res){
	res.render('index');
});

router.get('/raw',function(req,res){
	res.send('hello express!');
});

router.get('/users/:id',function(req,res){
	res.send('you typed ' + req.params.id);
});

router.get('/api/meetups',function(req,res){
	res.send(meetups);
});
router.post('/api/meetups',function(req,res){
	console.log(req.body);
	meetups.push({name:req.body.name, id: meetups.length + 1});
	res.send(req.body);
});

module.exports = router;