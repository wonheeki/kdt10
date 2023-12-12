const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('client');
})

const server = app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

// 웹소켓 생성과 동시에 ? express 서버와 웹소켓 서버를 연결(같은 포트를 공유)
const wsServer = new ws.Server({server:server});

const sockets =[]; // 클라이언트 소켓들을 저장할 배열


// 또 다시 돌아온 콜백함수에 대한 의문..
// socket을 만든 적이 없는데 어떻게 매개변수에서 socket이라는 것을 활용해주는걸까
// socket은 그냥 변수일 뿐이다
// 여기서 socket이라는 매개변수로 활용해주는 값은 wsServer 객체를 생성하면서 객체로 넣어준 server값일까 아니면 connection 이벤트가 발생하면 wsServer메서드에서 자체적으로 반환해주는 값일까?
// 정답은 wsServer.on 메서드에서 connection 이벤트가 발생하면 WebSocket 객체를 생성하고 반환. 그래서 socket이라는 객체(변수?)를 통해 WebSocket 객체를 사용할 수 있는 것

wsServer.on('connection',(socket)=>{
    console.log(`[클라이언트 연결 완료]`);
    sockets.push(socket); // 배열에 접속한 클라이언트 객체 추가

    // 클라이언트의 메세지 수신
    socket.on('message',(message)=>{
        console.log('클라이언트로부터 받은 메세지 > ', message);

        // 웹 소켓 서버에 접속한 모든 클라이언트에게 메세지 전송
        // = 브로드캐스팅(여러 컴퓨터한테 데이터 전송)
        sockets.forEach((socket)=>{
            socket.send(`${message}`);
        })
    })

    socket.on('error', (error)=>{
        console.log('에러 발생 > ',error);
    })

    socket.on('close', ()=>{
        console.log('[클라이언트 연결 종료]');
    })
}) // 연결했을 때 실행될 콜백함수
