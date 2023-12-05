const models = require('../models/index');
const User = models.User;

exports.main = (req, res) => {
    res.render('index');
}

exports.get_signup = (req, res) => {
    res.render('signup');
}

exports.get_signin = (req, res) => {
    res.render('signin');
}

// 회원가입 요청
exports.post_signup = (req, res) => {
    // 뷰 (요청) -> 라우터 -> 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 뷰 (응답)

    
    console.log('post_signup >', req.body);

    // User.post_signup(req.body, (result) => {
    //     // result: rows
    //     res.send(result);
    // })

    // 'INSERT INTO user (userid, name, pw) VALUES ( ?, ?, ?)';
    User.create({
        userid:req.body.userid,
        name:req.body.name,
        pw:req.body.pw
    }).then((result)=>{
        console.log('create > ',result);
        res.send(result);
    })

}

// 로그인 요청
exports.post_signin = (req, res) => {
    console.log(req.body);
    // User.post_signin(req.body, (result) => {
    //     // result: rows [{}]
    //     if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
    //     else res.send({ isLogin: false });
    // })

    User.findAll({
        where:{userid:req.body.userid,
                pw:req.body.pw        
    }
    }).then((result)=>{
        console.log('findAll > ', result);
        if (result.length > 0) res.send({ isLogin: true, userInfo: result[0] });
        else res.send({ isLogin: false });
    })
}

// 회원정보 수정 페이지 요청
exports.post_profile = (req, res) => {
    console.log(req.body); // {userid: ~}
    // User.post_profile(req.body.userid, (result) => {
    //     // result: rows [{}]

    //     if (result.length > 0) res.render('profile', { data: result[0] })
    // })

    User.findAll({
        // 만약 result를 { id: 15, userid: 'y', name: 'y', pw: 'y' } 이 값만 받고싶다?
        // raw : true, // 를 추가하면 됨
        where:{userid:req.body.userid}
    }).then((result)=>{
        console.log('findAll > ', result);
        // console에서는 User 객체 자체로 확인할 수 있지만

        // User 객체
        /*
            [
                user {
                    dataValues: { id: 15, userid: 'y', name: 'y', pw: 'y' },
                    _previousDataValues: { id: 15, userid: 'y', name: 'y', pw: 'y' },
                    uniqno: 1,
                    _changed: Set(0) {},
                    _options: {
                    isNewRecord: false,
                    _schema: null,
                    _schemaDelimiter: '',
                    raw: true,
                    attributes: [Array]
                    },
                    isNewRecord: false
                }
            ]
        */
        // render나 send같이 프론트로 보낼 때는 { id: 15, userid: 'y', name: 'y', pw: 'y' } 이 값만 간다.

        
        if (result.length > 0) res.render('profile', { data: result[0] })
    })
}

// 회원정보 수정 요청
exports.edit_profile = (req, res) => {
    console.log(req.body);
    // User.edit_profile(req.body, (result) => {
    //     res.send('회원정보 수정 성공!')
    // })
    User.update({
        name:req.body.name,
        pw:req.body.pw
    },{
        where:{id:req.body.id}
    }).then((result)=>{
        console.log('update > ', result);
        res.send('회원정보 수정 성공!')
    })
}

// 회원 탈퇴 요청
exports.delete_profile = (req, res) => {
    console.log(req.body); // {id: ~}

    // User.delete_profile(req.body.id, (result) => {
    //     res.send({ deletedId: req.body.id });
    // })

    User.destroy({
        where:{id:req.body.id}
    }).then((result)=>{
        console.log('destroy > ', result);
        res.send('삭제성공');
    })
}