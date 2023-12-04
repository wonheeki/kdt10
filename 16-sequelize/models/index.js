const Sequelize = require('sequelize');
const config = require(__dirname +'/../config/config.json')['development'];

console.log('config > ',config);
/*
    config >  {
    username: 'user',
    password: '1234',
    database: 'kdt',
    host: '127.0.0.1',
    dialect: 'mysql'
    }
*/

const db ={};

// 시퀄라이즈 객체선언시 매개변수로 다음 정보들을 받음
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require('./Visitor')(sequelize,Sequelize);
// models/Visitor.js에서 정의한 모델이 db.Visitor에 들어감
// db = { sequelize: sequelize , Sequelize : Sequelize, Visitor : ~~~~~ }

module.exports = db;
// db라는 변수를 내보냄
// 시퀄라이즈 객체를 만들고 모듈로써 내보내서 "다른 파일에서 모두 같은 객체를 사용할 수 있게 함"