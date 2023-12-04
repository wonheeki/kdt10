const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// 기본주소 : localhost:PORT

// GET /
router.get('/',controller.main);

// GET /visitors - 전체 조회
router.get('/visitors',controller.get_vistors);

// POST /visitor
router.post('/visitor',controller.post_visitor);

// GET /visitor - 하나 조회
router.get('/visitor',controller.get_vistor); // req.query
router.get('/visitor/:id',controller.get_vistor2); //req.params

// 주의사항 ) params 사용시 router 정의 순서에 주의해야 함
// router.get('/visitor/:id',controller.get_vistor2); // id : test (둘이 get 메소드도 똑같고 /vistor 까지의 url이 같기 때문에 id의 값이 test로 들어갈 수 있음)
// router.get('/visitor/test',controller.get_vistor2);// params보다 위에

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능

// PATCH /visitor - 하나 수정
router.patch('/visitor',controller.patch_visitor);

// DELETE /visitor - 하나 삭제
router.delete('/visitor',controller.delete_visitor);
module.exports = router;
