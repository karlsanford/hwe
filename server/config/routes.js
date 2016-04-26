module.exports = function(app){
	var express = require('express'),
		router = express.Router(),
		guestsCtrl = require('../controllers/guests-controller'),
		engagementsCtrl = require('../controllers/engagements-controller'),
		blogsCtrl = require('../controllers/blogs-controller');


//Bootstrap client app by rendering main page
	router.get('/',function(req,res){
		res.render('index');
	});

//Authentication


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

