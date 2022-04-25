//requiring express:
const express = require('express');

//requiring router:
const router = express.Router();

//importing passport:
const passport = require('passport');

//requiring our user controller:
const userController = require('../controllers/userController');

router.get('/SignUp', userController.Sign_Up);
router.get('/SignIn', userController.Sign_In);


router.post('/Create', userController.Create);


router.post('/Create_Session', passport.authenticate(
    'local', //strategy
    {failureRedirect: '/users/SignIn'},
), userController.createSession);

router.get('/SignOut', userController.destroySession);


module.exports = router;