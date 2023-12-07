const { Op } = require('sequelize');
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

exports.getPlayer= async (req,res)=>{
    try{
        const {player_id} = req.params;
        const player = await Player.findOne({
            where:{player_id:player_id}
        })
        res.send(player);
    }catch(err){
        console.log(err)
        res.send("Internal Server Error!")
    }
}

exports.postPlayer =async (req,res)=>{
    try{
        const{name, age, team_id}=req.body;
        const newPlayer = await Player.create({
            name,
            age,
            team_id
        })
        res.send(newPlayer);
    }catch(err){
        console.log(err)
        res.send("Internal Server Error!")
    }
}

exports.patchPlayer = async (req,res)=>{
    try{
        const {player_id} = req.params;
        const {team_id}= req.body;

        const updatedPlayer = await Player.update({
            team_id
        },{
            where:{player_id}
        })
        res.send(updatedPlayer);
    }catch(err){
        console.log(err)
        res.send("Internal Server Error!")
    }
}

exports.deletePlayer = async (req,res)=>{
    try {
        const {player_id} = req.params;
        const isDeleted = await Player.destroy({
            where:{player_id}
        });

        // 성공시 1, 실패시 0
        if (isDeleted){
            res.send({isDeleted:true})
        }else{
            res.send({isDeleted:false})
        }
    } catch (error) {
        console.log(error)
        res.send("Internal Server Error!")
    }
}

exports.getTeams = async (req,res)=>{
    try {
        // 쿼리스트링으로 조회 기준 설정
        const {sort, search} = req.query;
        let teams;

        // sort 키가 있는 경우 name 기준으로 오름차순 정렬
        if(sort ==='name_asc'){
             teams = await Team.findAll({
                attributes:["team_id","name"], // 반환하고자 하는 필드를 지정하는데 사용, 이 옵션의 값은 배여이기 때문에 '[]' 사용
                order:[['name','asc']] // 정렬 조건을 지정하는데 사용, 정렬 조건은 2차원배열로 표현됨. 첫번째 요소는 정렬할 열(column)이고, 두번째 요소는 정렬방식(asc, desc)
            })
        }else if(search){
            // search key에 대한 값이 있다면
             teams = await Team.findAll({
                attributes:["team_id","name"],
                where:{
                    name:{[Op.like]:`%${search}%`} // 검색 조건을 지정하는데 사용. name에 like 연산자를 사용해서 부분일치를 검색하기 위해
                }
            })
        }else{
             teams = await Team.findAll({
                attributes:["team_id","name"],
            })
        }
        res.send(teams);
    } catch (error) {
        console.log(error)
        res.send("Internal Server Error!")
    }
}

exports.getTeam = async (req,res)=>{
    try {
        const {team_id}= req.params;
        const team = await Team.findOne({
            attributes:['team_id','name'],
            where:{team_id}
        });
        res.send(team);
    } catch (error) {
        console.log(error);
        res.send("Internal Server Error!");
    }
}

exports.getTeamPlayers = async (req,res)=>{
    try {
        const {team_id} =req.params;
        const team = await Team.findOne({
            where:{team_id},
            include:[{model:Player}], // join과 같은 역할
        })
        res.send(team);
    } catch (error) {
        console.log(error);
        res.send("Internal Server Error!");
    }
}