const express = require('express');
const app = express();
const PORT =8000;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// (임시) DB로부터 받아온 데이터 댓글 목록
const comments= [
    {
        id:1,
        userid:'helloworld',
        date:'2022-10-31',
        comment:'안녕하세요'
    },
    {
        id:2,
        userid:'hello',
        date:'2022-11-31',
        comment:'반가워요'
    },
    {
        id:3,
        userid:'apple',
        date:'2022-10-31',
        comment:'오 신기하다'
    },
    {
        id:4,
        userid:'best',
        date:'2023-04-31',
        comment:'댓글적기'
    }
]

const userInfo = {
    realId:'helloworld',
    realPw: '1234',
    name: '홍길동',
    age : 20,

}

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점 : 라우터(경로)가 멀어진다면? app.js 코드가 길어짐 => 유지보수성하락

// GET / 
app.get('/',(req,res)=>{
    res.render('index');
})

// GET / comments
app.get('/comments',(req,res)=>{
    console.log(comments); // [{}, {}, {}, {}]
    res.render('comments',{commentInfos:comments});
})


// GET /comment/:id
app.get('/comment/:id',(req,res)=>{
    // req.query : /comment?id=1
    console.log(req.params); // { id: '1' } : 라우트 매개변수에 대한 정보가 담겨있음
    console.log('id > ', req.params.id);

    const commentId = req.params.id; // 댓글 id : url로 들어온 매개변수


    // 존재하지 않는 댓글 id 접속시 404 페이지
    if(commentId <1 || commentId>comments.length){
        return res.render('404');
    }

    console.log(typeof commentId); // sgring

    // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
    if(isNaN(commentId)){
        return res.render('404');
    }

    
    res.render('comment',{commentInfo : comments[commentId-1]});
})


// GET /user
app.get('/user',(req,res)=>{
    res.render('user',{userInfo});
})


// [404 error]
// 맨 마지막에 라우트로 선언 : 위에다 하게 되면 나머지 코드 무시되기 때문에
app.get('*',(req,res)=>{
    res.render('404');
})


app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})