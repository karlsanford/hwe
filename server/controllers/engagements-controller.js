Engagement = require('../models/engagements');

var engagementsCtrl = {
    create: function(req,res){
        var newEngagement = new Engagement(req.body);
        newEngagement.save(function(err, engagement){
            if(err) return console.error(err);
            res.send(engagement);
        });
    }
};

module.exports = engagementsCtrl;