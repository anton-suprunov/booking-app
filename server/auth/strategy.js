var UserModel = require('../users/model');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  
  passport.use(new LocalStrategy(UserModel.authenticate()));

  /*passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    //session: false,
    passReqToCallback: true
  }, function(req, username, password, done) {
    UserModel.findOne({ username: username }, function (err, user) {
      //console.log('find one callback', arguments);

      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }));*/
  //passport.use(User.createStrategy());


  passport.serializeUser(UserModel.serializeUser());
  passport.deserializeUser(UserModel.deserializeUser());
}