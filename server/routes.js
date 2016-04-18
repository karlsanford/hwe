var express = require('express'),
	router	= express.Router(),
	Thing = require('./models/things'),
	Guest = require('./models/guests');

//static data


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
router.get('/api/guests',function(req,res){
	Guest.find(function(err, guests){
		if(err) return console.error(err);
		res.send(guests);
	})
});
router.post('/api/guests',function(req,res){
	var newGuest = new Guest(req.body);
	newGuest.save(function(err,guest){
		if(err) return console.error(err);
		res.send(guest);
	});
});

router.get('/api/meetups',function(req,res){
	Thing.find(function(err, things){
		if(err) return console.error(err);
		res.send(things);
	})
});
router.post('/api/meetups',function(req,res){
	console.log(req.body);
	console.log(new Date());
	var thisThing = new Thing(req.body);
	thisThing.save(function(err, thisThing){ //shouldn't use thisThing in both places
		if(err) return console.error(err);
		res.send(thisThing);
	});
	//meetups.push({name:req.body.name, id: meetups.length + 1});
	//res.send(meetups);
});

module.exports = router;