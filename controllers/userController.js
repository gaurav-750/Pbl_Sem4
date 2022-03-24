module.exports.Sign_Up = function(req, res){
    return res.render('SignUp');
}




module.exports.Create = function(req, res){
    console.log('Signing up the user!');
    console.log(req.body);
}