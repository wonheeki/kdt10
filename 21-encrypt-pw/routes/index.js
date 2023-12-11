const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

router.get('/',controller.main);
router.get('/signin',controller.signin);
router.post('/login',controller.login_post);
router.get('/logout',controller.logout);
router.get('/signup',controller.signup);
router.post('/register',controller.register);

module.exports = router;