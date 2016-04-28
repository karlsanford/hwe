var User = require('../models/users');

var userCtrl = {
    getAll: function(req, res){
        User.find(function(err, users){
            if(err) return console.error(err);
            res.send(users);
        });
    },
    create: function(req, res){
        var newUser = new User(req.body);
        newUser.save(function(err, user){
            if(err) console.error(err);
            res.send(user);
        });
    }
};

module.exports = userCtrl;