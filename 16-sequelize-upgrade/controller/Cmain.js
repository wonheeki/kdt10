const {Player,Profile,Team} = require('../models/index')

exports.getPlayers = async (req,res)=>{
    try{
        const players = await Player.findAll();
        res.send(players);
        
    }catch(err){
        console.log(err);
        res.send('서버 에러');
    }
}