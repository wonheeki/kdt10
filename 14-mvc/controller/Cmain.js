// [After] Model 연결
const Comment = require('../model/Comment')

// [Before] Model 연결 전
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

// Get /
exports.main = (req,res)=>{
    res.render('index');
};

// GET /comments
exports.comments =(req,res)=>{
    console.log(Comment.commentInfos()); // [{}, {}, {}, {}]
    res.render('comments',{commentInfos:Comment.commentInfos()});
};

// GET /comments
exports.comment =(req,res)=>{
    // req.query : /comment?id=1
        console.log(req.params); // { id: '1' } : 라우트 매개변수에 대한 정보가 담겨있음
        console.log('id > ', req.params.id);
        const comments = Comment.commentInfos(); // (model 연결 후 추가)
    
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
};
    