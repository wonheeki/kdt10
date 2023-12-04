const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser');

router.get('/',controller.main);
router.get('/signup',controller.signup);
router.post('/signup/register',controller.post_register);
router.get('/signin',controller.signin);
router.post('/signin',controller.post_signin);
router.post('/profile',controller.post_profile);
router.patch('/profile/edit',controller.profile_edit)
router.delete('/profile/delete',controller.profile_delete);

module.exports = router;