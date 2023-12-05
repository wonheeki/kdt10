const { escape } = require('mysql2');
const User = require('../model/User');


exports.main=(req,res)=>{
    res.render('index');
}

// 로그인 페이지로 이동
exports.signin=(req,res)=>{
    res.render('signin');
}

// 로그인
exports.post_signin=(req,res)=>{
    // 이것이 view인 form에서 받아온 값
    /*
     console.log('req.body > ',req.body);
    const{userid,pw} = req.body;
    
    User.postLogin(userid,(result)=>{
        console.log('req.body.userid > ', req.body.userid);
        console.log('Cuser.js result >',result);

        console.log('result[0] > ',result[0]);
        console.log('result[0].userid > ', result[0].userid);

        for(let i =0;i<result.length;i++){
            if(userid == result[i].userid){
                if(pw == result[i].pw){
                    console.log('loginSuccess');
                    return res.send(result[i]);
                }else{
                    console.log('pwFail')
                    return res.send('pwFail')
                }
                
            }else{
                console.log('idFail');
                return res.send('idFail');
                
            }
        }
        
    })
    */
   User.postLogin(req.body,(result)=>{
        if(result.length >0) res.send({isLogin:true, userInfo:result});
        else res.send({isLogin:false});
   })
}

// 회원가입 페이지로 이동
exports.signup=(req,res)=>{
    res.render('signup');
}

// 회원가입
exports.post_register = (req,res)=>{
    console.log(req.body);
    const {userid,pw,name} = req.body;

    User.postRegister(req.body,(result)=>{
        console.log('postRegister id> ',result)
        console.log(result);
        // res.send({userid:result,pw ,name})
        res.render('signin');
    })
}

// 수정페이지로 이동
exports.post_profile=(req,res)=>{
    console.log(req.body);  //{userid : a}
    User.postProfile(req.body.userid,(result)=>{
        console.log('resultdididi>',result);
        
        if(result.length>0){
            res.render('profile',{userInfo:result[0]})
        }
        res.render('profile',{userInfo:result});

    })
}


// 수정
exports.profile_edit=(req,res)=>{
    User.editProfile(req.body,(result)=>{
        res.send('updateSuccess');
    })
}

exports.profile_delete=(req,res)=>{
    User.deleteProfile(req.body.id,(result)=>{
        res.send('deleteSuccess');
    })
}