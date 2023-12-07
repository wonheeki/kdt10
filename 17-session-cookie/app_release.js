const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser());

const cookieConfig = {
  httpOnly:true,
  maxAge:24*60*60*1000, // 24시간
}

app.use(session({
  secret:"mySessionSecret",
  resave: false,
  saveUninitialized:true,
  cookie:{
      httpOnly:true,
      maxAge :30*60*1000
  }
}))


app.get('/', (req, res) => {
  // *다음과 같이 기능 구현하였는데, 굳이 이렇게 하지 않아도 됩니다.
  // 모달 체크박스 체크시 -> GET / ; undefined
  // 모달 체크박스 미체크시 -> GET / ; hide
  // console.log('req.cookies.popup >> ', req.cookies.popup);

  // TODO: index.ejs render할 때 두 번째 인자로 popup key 로 요청의 쿠키값 보내기
  console.log(req.cookies)
  res.render('index', {popup: req.cookies.popup});
});

app.post('/setcookie', (req, res) => {
  // TODO: 쿠키 생성
  // 쿠키 이름: 'popup', 쿠키 값: 'hide'
  res.cookie('popup','hide',cookieConfig);
  res.send('쿠키 설정 성공!!');
});

const userid = 'aaaa';
const userpw = '1234';
app.get('/session',(req,res)=>{
  // reqq.session.user 값이 있는지 검사를 해서 isLogin 변수로 로그인 여부를 보내준다.
  const user = req.session.user;
  console.log('req.session.user > ', user); // 값이 없을 때
  res.render('index1',{user:req.session.user});
})

app.get('/signin',(req,res)=>{
  res.render('signin',{user:req.session.user});
})

app.post('/signin/login',(req,res)=>{
  if (userid==req.body.userid){
    if(userpw ==req.body.pw){
      req.session.user = req.body.userid;
      res.send({user:req.body.userid});
    }
  }
})

app.get('/logout',(req,res)=>{
  const user = req.session.user;
  req.session.destroy((err)=>{
    // 삭제하고 실행될 함수
    if (err){
        console.log(err);
        res.send('failed');
    }
    res.redirect('/session'); // 세션 객체에서 name 키 값이 사라짐
})
})

app.get('/signup',(req,res)=>{
  res.render('signup');
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 힌트
// req 객체
// req.cookies: cookie-parser 미들웨어가 만드는 요청의 쿠키를 해석한 객체
// req.singedCookies: 서명된 쿠키들은 req.cookies 대신 여기에 담겨 있음

// res 객체
// res.cookie(키, 값, 옵션): 쿠키를 설정하는 메서드
// res.clearCookie(키 값, 옵션): 쿠키를 제거하는 메서드
