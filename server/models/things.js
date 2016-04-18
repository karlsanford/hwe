var mongoose = require('mongoose');

var thingSchema = mongoose.Schema({
    name: String,
    id: String
});

var Thing = mongoose.model('Thing',thingSchema);

module.exports = Thing;

