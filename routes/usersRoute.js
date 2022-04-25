//requiring express:
const express = require('express');

//requiring router:
const router = express.Router();


//requiring our user controller:
const userController = require('../controllers/userController');

router.get('/SignUp', userController.Sign_Up);
router.get('/SignIn', userController.Sign_In);

router.post('/Create_Session', userController.createSession);


router.post('/Create', userController.Create);


module.exports = router;