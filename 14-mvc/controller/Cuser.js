// 유저에 대한 처리
const User = require('../model/User')


exports.user = (req,res)=>{
    res.render('user',{userInfo:User.userInfo()});
}


// 흐름 정리
/*
1. 클라이언트가 '/user'경로로 GET 요청을 보내면
2. user.js 라우터가 요청을 받아 'Cuser.js'의 user 컨트롤러 함수를 호출한다
3. 컨트롤러 함수는 'User.js'의 'userInfo' 함수를 호출하여 유저 정보를 가져온다.(require한 model js)
4. 해당 정보를 뷰에 전달하면서 'res.render'를 통해 user뷰를 렌더링한다
5. 최종적으로 클라이언트에게 응답이 보내지고 화면에 출력이 된다

** 렌더링? 라우팅?
*/