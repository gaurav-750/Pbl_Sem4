//importing the user model:
const User = require("../models/user");

module.exports.Sign_Up = function(req, res){
    return res.render('SignUp');
}

module.exports.Sign_In = function(req, res){
    return res.render('SignIn');
}


//getting up the sign Up data
//signing up the user:
module.exports.Create = function(req, res){
    //first check whether password and confirm password are same:
    if (req.body.password != req.body.confirmPass) {
        return res.redirect('back');
    }

    //Email has to be unique:
    User.findOne({email: req.body.userEmail}, function(err, user){
        if (err) {
            console.log('Error in signing up the User');
            return;
        }

        console.log(user);

        if (user) {
            //email is already registered
            console.log("Email already registered!");
            return res.redirect('back');
        }else{
            //email is not registered -> Create user -> add user in database
            User.create({
                email: req.body.userEmail,
                password: req.body.password,
                name: req.body.userName
            }, function(err, user){
                if (err) {
                    console.log("Error", err);
                    return;
                }

                console.log("User Created:", user);
                //user is created now ->redirect to sign in page
                return res.redirect('/users/SignIn');
            })


        }

    })

}


module.exports.createSession = function(req, res){
    console.log('Signing in the user!');
    return res.render('home');
}



module.exports.destroySession = function(req, res){
    req.logout(); 

    return res.redirect('/');
}