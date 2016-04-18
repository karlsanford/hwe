var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    body: String,
    date: Date,
    userId: String
});

var blogSchema = mongoose.Schema({
    title: String,
    body: String,
    comments: [commentSchema]
});



var Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;