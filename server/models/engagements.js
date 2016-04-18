var mongoose = require('mongoose');

var engagementSchema = mongoose.Schema({
    name: String,
    email: String,
    company: String,
    message: String
});

var Engagement = mongoose.model('Engagement',engagementSchema);

module.exports = Engagement;