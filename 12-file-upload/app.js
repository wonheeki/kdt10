const express = require('express');
const app = express();
const PORT = 8000;

// multer 곤련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
    dest: 'uploads/', // dest : 클라이언트가 업로드한 파일을 저장할 서버측 경로
})

// static 등록 => 이미지 경로 접근(프론트)
app.use('/uploads',express.static(__dirname +'/uploads'))

// multer 세부 설정
const uploadDetail = multer({
    // storage : 저장할 공간에 대한 정보
    storage: multer.diskStorage({
        // destination 경로 설정
        destination(req, file, done) {
            // done : 콜백함수
            // done(null, xx) : null -> 에러가 없다는 의미
            done(null, 'uploads/'); // 파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            // 파일의 확장자를 추출 => "path" 모듈 활용
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
            console.log('ext > ', ext);
            console.log('file name >', path.basename(file.originalname, ext) + Date.now() + ext);
            //path.basename(file.originalname, ext)=> apple
            // => 확장자를 제외한 파일이름만
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})

// 1. single() : 하나의 파일을 업로드
// upload.single('userfile') : 클라이언트 요청이 들어오면, 
// multer 설정(upload)에 따라 파일을 업로드 한 후, req.file 객체를 생성

// ** single() 인자는 input 태그의 name 값과 일치시켜야 함 **
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.send('파일 업로드 완료!');

    // req.file
    /*
        {
        fieldname: 'userfile', // 폼에 정의한 name 값
        originalname: 'ìº¡ì²\x98.PNG', // 원본 파일명
        encoding: '7bit', // 파일 인코딩 타입
        mimetype: 'image/png', // 파일 타입
        destination: 'uploads/', // 파일 저장 경로
        filename: 'ìº¡ì²\x981701054979015.PNG', // 저장된 파일명
        path: 'uploads\\ìº¡ì²\x981701054979015.PNG', // 업로드된 파일 전체 경로       
        size: 4641   // 파일 크기
        }
    */
})

// 2. array(): 하나의 인풋에 여러 파일 업로드
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {

    // [{File1 정보}, {file2 정보}, ...] : 배열 형태
    console.log(req.files);
    console.log(req.body);
    res.send('하나의 인풋에 여러 파일 업로드 완료!');
})


// 3. fields() : 여러 파일을 각각의 인풋에 업로드
app.post('/upload/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
    (req, res) => {
        /*
               userfile1:[{
                   {배열정보}
               },
               userfile2:{
                   {배열정보}
               }
           ]
        */

        console.log(req.files);
        console.log(req.body); // [Object: null prototype] { title: [ 'd', 'a' ] }   
        res.send('여러개의 인풋에 각각의 파일 업로드 완료!');
    })


app.post('/dynamic',uploadDetail.single('dynamicFile'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send({file:req.file, title:req.body.title});
})

// 실습
app.get('/practice',(req,res)=>{
    res.render('practice');
})

app.post('/practice/register',uploadDetail.single('profile'),
(req,res)=>{
    console.log(req.file);
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log(`${PORT} port is opening`)
})