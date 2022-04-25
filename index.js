//requiring express:
const express = require('express');

const app = express();
const port = 8000;


//Database:
const db = require('./config/mongoose');

//telling our web app to use ejs as the template engine:
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));

//accessing the static files: css and js:
app.use(express.static('assets'));

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