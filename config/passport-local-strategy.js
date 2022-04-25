//SETTING UP PASSPORT JS:

//importing passport package:
const passport = require('passport');

//import strategy from passport-local:
const LocalStrategy = require('passport-local').Strategy;

//import User
const User = require('../models/user');

console.log('p-l-strategy!');


        //Authentication using passport:

passport.use(new LocalStrategy({
        usernameField: 'userEmail',
    },
    function(userEmail, password, done) {
        
        //find the user and establish the identity:
        User.findOne({email: userEmail}, function(err, user){
            if (err) {
                console.log('error', err);
                return done(err);
            }

            console.log('user', user);

            //if the user is not found or the password entered is incorrect:
            if (!user || user.password != password) {
                console.log('Invalid username/password');
                return done(null, false);
            }

            console.log('All good!');
            // the user is found,  return the user:
            return done(null, user);
        })
    }

));


//serializing the user:
//serialize user decides which key is to be kept in session cookie:
passport.serializeUser(function(user, done){
    console.log('serialize');

    done(null, user.id); //this will automatically encrypt the id and store it in the cookie
})


//deserializing the user from cookie:
passport.deserializeUser(function(id, done){
    console.log('deserialize');

    User.findById(id, function(err, user){
        if (err) {
            console.log('Error inn finding the user');
            return done(err);
        }

        return done(null, user);
    })
});


//check if the user is authenticated:

//this function is going to be used as 'middleware'.
//if the user is signed in -> pass the request to the next action(controllers function)
passport.checkAuthentication = function(req, res, next){

    if (req.isAuthenticated()) {
        return next();
    }

    //if the user is not signed in:
    return res.redirect('/users/SignIn');
}


//to access the user in views:
passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()) {
        console.log("Set Authenticated User!");

        res.locals.signedInUser = req.user;
    }

    return next();
}







module.exports = passport;