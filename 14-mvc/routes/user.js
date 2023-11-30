// 라우터 연결

const express = require('express');
const router = express.Router();
controller = require('../controller/Cuser');


// localhost:PORT/user => 기본 경로이기 때문에 /user를 쓸 필요가 없음
router.get('/',controller.user);

module.exports= router;