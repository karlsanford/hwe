var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

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
    username: String,
    password: String,
    salt: String,
    passHash: String,
    firstName: String,
    lastName: String,
    address: addressSchema,
    phones: [phonesSchema],
    emails: [emailSchema]
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password,this.password);
};

var User = mongoose.model('User',userSchema);

module.exports = User;