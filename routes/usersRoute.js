//requiring express:
const express = require('express');

//requiring router:
const router = express.Router();


//requiring our user controller:
const userController = require('../controllers/userController');

router.get('/SignUp', userController.Sign_Up);


router.post('/Create', userController.Create);


module.exports = router;