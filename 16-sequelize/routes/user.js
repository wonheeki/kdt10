const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// localhost:PORT/user 기본 경로

// GET /user - 메인 페이지
router.get('/', controller.main);
// GET /user/signup - 회원가입 페이지 
router.get('/signup', controller.get_signup);
// GET /user/signin - 로그인 페이지 
router.get('/signin', controller.get_signin);

// POST /user/signup - 회원가입 요청
router.post('/signup', controller.post_signup);

// POST /user/signin - 로그인 요청
router.post('/signin', controller.post_signin);

// POST /user/profile - 회원정보 수정 페이지 요청
router.post('/profile', controller.post_profile);

// PATCH /user/profile/edit - 회원정보 수정 요청
router.patch('/profile/edit', controller.edit_profile);

// DELTE /user/profile/delete - 회원 탈퇴 요청
router.delete('/profile/delete', controller.delete_profile);

module.exports = router;