// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); //dotenv.config()를 호출하면 .env 파일에 정의된 환경 변수들이 현재 프로세스의 환경 변수로 로드되어 process.env 객체에 저장됩니다. 
// process.env.PORT, process.env.NAME, process.env.NODE_ENV와 같이 접근할 수 있게 됩니다.

const PORT = process.env.PORT;

app.get('/',(req,res)=>{
    console.log(process.env.NAME);
    console.log(process.env.NODE_ENV);
    res.send('hello world!');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})