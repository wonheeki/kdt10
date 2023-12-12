const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
// express 앱으로 http 서버를 생성ㄴ
const server = http.createServer(app);
// socket.io를 http 서버에 연결
const io = socketIO(server);
const PORT = 8000;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('chat');
})

// io.on() : socket 관련한 통신 작업을 처리
io.on('connection',(socket)=>{
    // connection 이벤트는 클라이언트가 접속했을 때 발생
    // 콜백 함수의 인자로 소켓 객체를 제공

    // socket.id : socket의 고유 아이디(브라우저 탭 단위)
    console.log('서버 연결 완료 > ',socket.id);

    // [실습1]
    //  hello 이벤트를 수신하여 처리하고, 
    socket.on('hello',(data)=>{
        // console.log(data);
        console.log(`${data.who}:${data.msg}`);
        // 클라이언트에게 helloKR 이벤트를 전송
        socket.emit('helloKR',{who:'hello',msg:'안녕!'});
    })
    
    socket.on('study',(data)=>{
        // console.log(data);
        console.log(`${data.who}:${data.msg}`);

        socket.emit('studyKR',{who:'study',msg:'공부중!'});
    })

    socket.on('bye',(data)=>{
        // console.log(data);
        console.log(`${data.who}:${data.msg}`);

        socket.emit('byeKR',{who:'bye',msg:'잘가!'});
    })


    // [실습 3] 채팅창 입장 안내 문구
    //같은 채팅방이니까 한 쪽에 다른 유저가 접속하더라도 다른쪽(다른 브라우저 탭)에도 나와야 함

    // emit() from server
    // - socket.emit(event_name, 보낼 data) : 해당 클라이언트에게만 이벤트, 데이터를 전송
    // - io.emit(event_name, data) : 서버에 접속한 모든 클라이언트한테 전송
    // - io:to(소켓 아이디).emit(event_name, 보낼 data) : 소켓 아이디에 해당하는 클라이언트에게만 전송

    // 전체 클라이언트에게 입장 안내
    io.emit('notice',`${socket.id}님이 입장하셨습니다.`);
})

server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})