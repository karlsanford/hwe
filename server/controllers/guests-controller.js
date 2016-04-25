var Guest = require('../models/guests');

var GuestsCtrl = {
    create: function(req,res) {
        var newGuest = new Guest(req.body);
        newGuest.save(function (err, guest) {
            if (err) return console.error(err);
            res.send(guest);
        });
    },
    findAll: function(req,res){
        Guest.find(function(err, guests){
            if(err) return console.error(err);
            res.send(guests);
        })
    }
};

module.exports = GuestsCtrl;