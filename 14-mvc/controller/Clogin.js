const Login =require('../model/Login');

exports.login= (req,res) => {
    res.render('login');
};

exports.loginCheck= (req,res) => {
    const userId = Login.loginInfo().id;
    const userPw = Login.loginInfo().pw;
    console.log('입력한 아이디 > ',req.body.id,', 입력한 비번 > ',req.body.pw)
    console.log('실제 아이디,비번 > ',Login.loginInfo())
    if(userId !=req.body.id || userPw != req.body.pw){
        // res.send({msg:'아이디를 잘못입력하셨습니다.'})
        res.send({loginInfo:Login.loginInfo(),isSuccess : false});
    }else{
        res.send({userId:userId,isSuccess : true});
        // render로 보내니까 안됨.. 왜? axios라서? 페이지를 이동하면 안되나?
    }
};