//requiring express:
const express = require('express');
const { appendFile } = require('fs');

//for seperating routes and controller, we'll use Router:
const router = express.Router();
console.log('Router loaded!');


//importing the home controller:
const homeController = require('../controllers/homeController.js');

router.get('/', homeController.home);








//exporting router
module.exports = router;