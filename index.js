//requiring express:
const express = require('express');

const app = express();
const port = 8000;


//requiring express-session ->used for session cookie:
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');


//telling our web app to use ejs as the template engine:
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));



//use session:
app.use(session({
    name: 'BeginFinance', //name of the cookie
    secret: 'blahblahblah',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100),
    }
}
));


//accessing the static files: css and js:
app.use(express.static('assets'));


//Database:
const db = require('./config/mongoose');

//we need to tell our app to use passport:
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);



//importing the routeIndex file:
const goToRouteIndex = require('./routes/indexRoute.js');
app.use('/', goToRouteIndex);



app.listen(port, function(err){
    if (err) {
        console.log(`Error: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
})