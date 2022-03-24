//requiring express:
const express = require('express');

//for seperating routes and controller, we'll use Router:
const router = express.Router();
console.log('Router loaded!');


//importing the home controller:
const homeController = require('../controllers/homeController.js');

//any request to '/' i.e home page goes to home controller
router.get('/', homeController.home);

//any request to '/users/ will go to usersRoute.js
router.use('/users', require('./usersRoute'));










//exporting router
module.exports = router;