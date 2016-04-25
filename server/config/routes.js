module.exports = function(app){
	var express = require('express'),
		router = express.Router(),
		guestsCtrl = require('../controllers/guests-controller'),
		engagementsCtrl = require('../controllers/engagements-controller'),
		blogCtrl = require('../controllers/blogs-controller'),
		passport = require('passport');

//init client side
	router.get('/',function(req,res){
		res.render('index');
	});


	router.post('/api/users/authenticate',passport.authenticate('local'),function(req,res){
		res.send('response from post to authenticate');
		res.send(result);
	});

//Guests
	router.get('/api/guests',guestsCtrl.findAll);
	router.post('/api/guests',guestsCtrl.create);

//Engagements
	router.post('/api/engagements',engagementsCtrl.create);

//blogs
	router.get('/api/blogs',blogCtrl.getAll);
	router.post('/api/blogs',blogCtrl.create);
	router.put('/api/blogs',blogCtrl.update);
	router.delete('/api/blogs/:id',blogCtrl.del);

//config
	app.use('/',router);
};

