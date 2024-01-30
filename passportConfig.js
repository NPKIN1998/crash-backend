const User = require("./models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    const localStrategy = require('passport-local').Strategy;

    passport.use(
      new localStrategy(async (username, password, done) => {
        try {
          const user = await User.findOne({ username: username });
    
          if (!user) {
            return done(null, false);
          }
    
          const passwordMatch = await bcrypt.compare(password, user.password);
    
          if (passwordMatch) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        } catch (err) {
          return done(err);
        }
      })
    );
    

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findOne({ _id: id });
      cb(null, user);
    } catch (err) {
      cb(err, null);
    }
  });
  
};