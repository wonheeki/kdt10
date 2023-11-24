const express = require('express');
const app = express();
const PORT = 8000;


// view engine 등록(view engine으로 뭘 사용할 것인지)
app.set('view engine','ejs');
// 어떤 폴더로 접근해야 되는지
app.set('./views','views');

// 미들웨어 등록

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({extended:true})) // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

// view 폴더 내부에 index라는 ejs 파일을 보여줌
app.get('/',(req,res)=>{
    res.render('index')
})


// GET '/login' 요청이 들어오면 임의의 메시지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login',(req,res)=>{
    console.log(req.query) // { id: 'a', pw: '1111' }
    // res.send('get 요청 성공!')
    res.render('result',{title:'GET 요청',userInfo:req.query});
    // result : 렌더링할 뷰 파일의 이름, {title:'GET 요청',userInfo:req.query} : 뷰에 전달되는 데이터
})

// POST '/login' 요청이 들어오면 임의의 메시지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post('/login',(req,res)=>{
    console.log(req.body) // { id: 'a', pw: '1111' }
    // res.send('post 요청 성공!')
    res.render('result',{title:'POST 요청',userInfo:req.body});
})

app.post('/js-form-check',(req,res)=>{
    console.log(req.body)
    res.send('js validation 성공')
})

// 실습
app.get('/practice1',(req,res)=>{
    res.render('practice1')
})


app.get('/p1Result',(req,res)=>{
    console.log(req.query) // { id: 'a', pw: '1111' }
    res.render('p1Result',{title:'GET 요청',userInfo:req.query});
})

app.post('/p1Result',(req,res)=>{
    console.log(req.body) // { id: 'a', pw: '1111' }
    res.render('p1Result',{title:'POST 요청',userInfo:req.body});
})


app.listen(PORT, ()=>{
    console.log(`${PORT} is opening!`);
})