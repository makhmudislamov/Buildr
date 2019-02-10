const mongoose = require('mongoose')
const passport = require('passport')
    , LocalStrategy = require('passport-local')

const User = require('../models/user')


module.exports = function(passport) {

    // Passport handles data conversion with some boilerplate
    passport.deserialize(function (user,done) {
        done(null, user)
    });
    passport.serialize(function (user,done) {
        done(null, user)
    })

    passport.use(new LocalStrategy({
      function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (!user.verifyPassword(password)) { return done(null, false); }
          return done(null, user);
        });
      }
    }));
}
