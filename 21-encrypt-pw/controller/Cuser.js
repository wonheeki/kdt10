const { Op } = require('sequelize');
const model = require('../models/index');
const User = model.User;
const bcrypt = require('bcrypt');
const { resourceUsage } = require('process');

const saltRounds = 10; // 솔트 라우드 수를 정의

// 1. 비밀번호 해싱 함수
function hashPW(password){
    return bcrypt.hashSync(password, saltRounds); // salt를 자동으로 생성
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수
// 같은지, 다른지만 알려줌
function comparePW(password,hashedPW){
    return bcrypt.compareSync(password,hashedPW); 
}


exports.main = (req,res)=>{
    res.render('index');
}

exports.signup=(req,res)=>{
    res.render('signup');
}

exports.register= async (req,res)=>{
    try {
        console.log(req.body);
        const{pw,name,userid}=req.body;
        const hashedPw = hashPW(pw)
        const newUser = await User.create({
            pw:hashedPw,
            name,
            userid
        })
        console.log('body',req.body);
        res.send( {newUser,user:userid})
    } catch (error) {
        console.log(error);
        res.send("Internal Server Error!")

    }
    
}


exports.signin = (req,res)=>{
    res.render('signin');
}

exports.login_post = async (req,res)=>{
    try {
        console.log(req.body);
        const {pw, userid} = req.body;
        
        const loginUser = await User.findOne({
            where:{userid:userid}
        })
        console.log('비밀번호 일치여부> ',comparePW(pw,loginUser.pw));
        if (comparePW(pw,loginUser.pw)){
            res.send({msg:'로그인 성공'})
        }else{
            res.send({msg:'비밀번호가 다릅니다.'})
        }
    } catch (error) {
        console.log(error);
    }
}

exports.logout = (req,res)=>{
    const user = req.session.user;
    req.session.destroy((err)=>{
      // 삭제하고 실행될 함수
      if (err){
          console.log(err);
          res.send('failed');
      }
      res.redirect('/session'); // 세션 객체에서 name 키 값이 사라짐
  })
}
