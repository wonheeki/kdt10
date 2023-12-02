const express = require('express');
const router = express.Router();
const controller = require('../controller/Clogin');


// localhost:PORT/user => 기본 경로이기 때문에 /user를 쓸 필요가 없음
router.get('/',controller.login);
router.post('/loginCheck',controller.loginCheck);

module.exports= router;