const passport = require('passport');


const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user')
//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function(email,password,done){
        //find a user and establish identity
        User.findOne({email : email},function(err,user){
            if(err){
                console.log('Error in finding the user',err);
                return done(err)
            }
            if (!user || user.password != password){
                console.log('username/password is invalid');
                return done(null,false)
            }
            return done(null,user);
        })
    }
))
//serializing the user to decde which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done(null,user.id)
})

//deserialize the user from the key in the cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log(err,'Error in finding user');
            return done(err);
        }
        return done(null,user)
    })
})

module.exports = passport;