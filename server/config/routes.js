module.exports = function(app, passport){
	var express = require('express'),
		router = express.Router(),
		guestsCtrl = require('../controllers/guests-controller'),
		engagementsCtrl = require('../controllers/engagements-controller'),
		blogsCtrl = require('../controllers/blogs-controller'),
		usersCtrl = require('../controllers/users-controller');
		//temp
		//passport = require('passport');


//Bootstrap client app by rendering main page
	router.get('/',function(req,res){
		res.render('index');
	});


//Users
	router.get('/api/users',usersCtrl.getAll);
	router.post('/api/users',usersCtrl.create);

	router.post('/api/users/signup',passport.authenticate('local-signup',{
		successRedirect : '/',
		failureRedirect : '/',
		failureFlash: true
	}));

	router.post('/api/users/login',passport.authenticate('local-login',{
		successRedirect : '/',
		failureRedirect : '/',
		failureFlash: true
	}));

//Guests
	router.get('/api/guests',guestsCtrl.findAll);
	router.post('/api/guests',guestsCtrl.create);

//Engagements
	router.post('/api/engagements',engagementsCtrl.create);

//Blogs
	router.get('/api/blogs',blogsCtrl.getAll);
	router.post('/api/blogs',blogsCtrl.create);
	router.put('/api/blogs',blogsCtrl.update);
	router.delete('/api/blogs/:id',blogsCtrl.del);

//Tell express to use router for routing
	app.use('/',router);
};

