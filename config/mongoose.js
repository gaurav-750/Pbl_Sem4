//requiring mongoose:
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/beginFinance_db');
const db = mongoose.connection;

//handling error:
db.on('error', console.error.bind(console, 'Error connecting to mongodb!'));


//once the connection is open for me to interact with the database(on line 9), 
db.once('open', function(){
    console.log('Connected successfully to mongodb!');
});

module.exports = db;