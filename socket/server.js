const express = require('express');
const socketIo = require('socket.io');
const http = require('http');

const app = express();
const PORT = 8000;

const server = http.createServer(app);

// socket 자체적으로 서버가 작동하지는 않기 때문에 http 에 붙어서 연결시켜줌
const io = socketIo(server);

// 채팅방 정보 저장 변수
const rooms = {};
// 미들웨어
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extends: true }));

// 라우터
app.get('/', (req, res) => {
  res.render('index', { rooms });
});

// 방 생성
app.post('/create', (req, res) => {
  const roomId = req.body.id;
  if (!rooms[roomId]) {
    // 방이 존재하지 않는다면 생성
    rooms[roomId] = { users: {} };
  }
  // 방으로 리다이렉트
  res.redirect(`/rooms/${roomId}`);
});

// 방 접속
app.get('/room/:id', (req, res) => {
  const roomId = req.params.id;
  res.render('room', { roomId: roomId });
});

// 소켓
io.on('connection', (socket) => {
  // 사용자가 방에 입장시
  socket.on('join', (roomId, userId) => {
    // 소켓 io의 방에 입장
    socket.join(roomId);
    // 방 정보에 사용자 정보 추가
    rooms[roomId].users[socket.id] = userId;

    // 방에 있는 사용자에게 다른 사용자 연결 알림
    socket.to(roomId).emit('userJoin', userId);
  });
});

// 서버 오픈
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
