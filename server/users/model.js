var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: String,
    //email: String,
    password: String
});

//User.plugin(passportLocalMongoose, { usernameField: 'email' });
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);