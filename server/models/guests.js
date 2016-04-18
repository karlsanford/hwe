var mongoose = require('mongoose');

var guestSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
});

var Guest = mongoose.model('Guest',guestSchema);

module.exports = Guest;