module.exports.home = function(req, res){
    return res.render('home.ejs', {
        title: "Begin-Finance"
    })
}