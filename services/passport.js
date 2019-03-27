const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const mongoose = require('mongoose')
const keys = require('../config/keys')

// passport.use(new GoogleStrategy({
//     clientID: process.env['GOOGLE_CLIENT_ID'],
//     clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
//     scope: 'profile'
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     // ...
//   }
// ));
const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
  done(null,user.id)
})

passport.deserializeUser((id,done)=>{
  User.findById(id).then(user=>{
    done(null,user)
  })
})

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret:keys.googleClientSecret,
  callbackURL:'/auth/google/callback',
  proxy: true
}, async (accessToken , refreshToken, profile, done) => {

  const existingUser = User.findOne({googleId:profile.id});
    if (existingUser) {
      done(null, existingUser)
    }else {
      const user = await new User({googleId:profile.id}).save();
      done(null,user);
    }
  }

)
)
