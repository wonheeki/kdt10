const express = require('express');
const app = express();
const PORT = 8000;

// express 에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine','ejs');
// 템플릿 엔진 파일(.ejs)을 저장할 위치 등록
app.set('views','./views');

// static 미들웨어 등록 (정적 파일 로드 ex. css, javascript)
// static 이라는 실제 폴더를 static 이름으로 접근하겠다
// html은 ejs로 대체 css와 js는 static 미들웨어 등록
app.use('/static',express.static(__dirname + '/static'))
console.log(__dirname); // ~~/07-3-express


// app.get(경로, 해당경로로 들어왔을 때 실행할 함수)
// localhost:8000/ 경로로 접속했을 때
app.get('/',function(req, res){
    // res.send(응답 내용)
    // res.send('<h1>Hello Express</h1>');

    // index라는 파일명을 찾아서 해당 파일 렌더
    // index 파일에 {}값 보내기
    res.render('index' ,{
        btns:['사과','오렌지','키위'],
        isLogin:false,
        me:{
            name:'gildong',
            msg:'반갑습니다'
        }
    });
})

// controller와 유사하네

// login 경로로 접속했을 때
app.get('/login',function(req,res){
    res.render('login')
})

// register 경로로 접속했을 때
app.get('/register',function(req,res){
    res.render('register')
})

// 보안을 위해? 감춰준다?

app.listen(PORT, function(){
    console.log(`server listening on ${PORT}`);
})

// APP.JS를 하나의 서버라고 생각해
// EJS는 클라이언트로 생각해
