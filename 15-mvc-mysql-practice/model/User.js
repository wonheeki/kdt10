const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'1234',
    database:'kdt',
});

exports.postRegister =(data,cb)=>{
    console.log('postRegister >',data);
    const sql = 'insert into user (userid,pw,name) values(?,?,?)';
    const values = [data.userid,data.pw,data.name];
    conn.query(sql,values,(err,rows)=>{
        if (err) throw err;

        console.log('visitor.js > ',rows);
        cb(rows.insertId);
    });
}

exports.postLogin =(data,cb)=>{
    const sql = 'SELECT * FROM user where userid =? and pw =?';
    const values = [data.userid, data.pw];
    conn.query(sql,values,(err,rows)=>{
        if (err) throw err;

        console.log('User.js postLogin > ',rows);
        cb(rows);
    });
}

exports.postProfile = (userid,cb)=>{
    const sql = "select * from user where userid =?";
    conn.query(sql,[userid],(err,rows)=>{
        if(err) throw err;
        console.log(rows)
        
        cb(rows);
    })
}

exports.editProfile =(data, cb)=>{
    const sql = "update user set pw =?, name=? where id =?"
    const values=[data.pw, data.name, data.id];
    conn.query(sql,values,(err,rows)=>{
        if(err) throw err;

        console.log(rows);

        // 여기서 콜백함수가 왜 필요한건지 모르겠다
        // rows를 넘겨주는 이유는 컨트롤러에서 값을 받아서 프론트에서 활용해주기 위함이 아니었나?
    
        cb(rows);
        
    })
}

exports.deleteProfile=(id,cb)=>{
    const sql = 'delete from user where id =?'

    conn.query(sql,[id],(err,rows)=>{
        if(err) throw err;

        cb(rows);
    })
}