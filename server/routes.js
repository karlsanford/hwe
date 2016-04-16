var express = require('express'),
	router	= express.Router();

//static data
var todoItems = [
	{id:1,desc:'foo'},
	{id:2,desc: 'bar'},
	{id:3, desc: 'naz'}
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

module.exports = router;