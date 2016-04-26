var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    street1: String,
    street2: String,
    city: String,
    state: String,
    zip: String
});

var phonesSchema = mongoose.Schema({
    type: String,
    number: String
});

var emailSchema = mongoose.Schema({
    type: String,
    emailAddress: String
});


var userSchema = mongoose.Schema({
    userName: String,
    salt: String,
    passHash: String,
    firstName: String,
    lastName: String,
    address: addressSchema,
    phones: [phonesSchema],
    emails: [emailSchema]
});

var User = mongoose.model('User',userSchema);

module.exports = User;