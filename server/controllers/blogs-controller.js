var Blog = require('../models/blogs');

function getAll (req,res){
    Blog.find(function(err, blogs){
        if(err) return console.error(err);
        res.send(blogs);
    });
}

function create (req,res){
    var newBlog = new Blog(req.body);
    newBlog.save(function(err, blog){
        res.send(blog);
    });
}

function update(req,res){
    Blog.findOneAndUpdate({_id:req.body._id},req.body,function(err,blog){
        if(err) return console.error(err);
        res.send(blog);
    });
}

function del(req,res){
    //console.log(req);
    Blog.findByIdAndRemove({_id:req.params.id},function(err, doc, next){
        console.log(req.params.id);
        if(err){
            res.send(err);
            return console.error(err);
        }
        res.send(doc);
    });
}

module.exports = {
    getAll: getAll,
    create: create,
    update: update,
    del: del
}