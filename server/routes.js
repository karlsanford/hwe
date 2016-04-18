var express = require('express'),
	router	= express.Router();

//static data
var meetups = [
	{id:1, name:'foo'},
	{id:2, name: 'bar'},
	{id:3, name: 'naz'}
];




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
	console.log(new Date());
	meetups.push({name:req.body.name, id: meetups.length + 1});
	res.send(meetups);
});

module.exports = router;