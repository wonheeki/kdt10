const express = require('express');
const app =express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index');
})

// ajax
app.get('/ajax',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

// axios
app.get('/axios',(req,res)=>{
    console.log(req.query);
    res.send(req.query);

    // 의도적으로 에러 발생
    // res.status(400).send('error msg!');
})

app.post('/axios',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

//fetch
app.get('/fetch',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
})

app.post('/fetch',(req,res)=>{
    console.log(req.body);
    res.send({name:req.body.name,gender:req.body.gender,msg:'fetch 성공!'});
})


// 실습
app.get('/practice1',(req,res)=>{
    res.render('practice1')
})

app.get('/axiosRegister',(req,res)=>{
    console.log(req.query)
    res.send(req.query);
})


const userId = 'aaaa';
const userPw = '1234';
app.get('/practice2',(req,res)=>{
    res.render('practice2')
})

// userId, userPw라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
// 결과값을 반환
app.post('/login',(req,res)=>{
    console.log(req.body)
    // res.send(req.body);
    if(userId !=req.body.id && userPw != req.body.pw){
        // res.send({msg:'아이디를 잘못입력하셨습니다.'})
        res.send({isSuccess : false});
    }else{
        res.send({userInfo:req.body, isSuccess : true});
    }

})


app.listen(PORT,()=>{
    console.log(`server is opening ${PORT}`);
})