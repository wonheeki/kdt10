// ----- mysql 연결 -----
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
});

exports.getVisitors = (cb) => {
    conn.query('SELECT * FROM visitor', (err, rows) => {
        if (err) throw err;

        console.log('Visitor.js >', rows);
        /*
        [
            { id: 1, name: '홍길동', comment: '내가 왔다.' },  
            { id: 2, name: '이찬혁', comment: '으라차차' }   
        ]
        */
        cb(rows);
    });
}
// exports.getVistors = ()=>{
//     return [
//         {
//             id:1,
//             name:'홍길동',
//             comment:'내가 왔다.'
//         },
//         {
//             id:2,
//             name:'이찬혁',
//             comment:'으라차차'
//         }
//     ]
// }


exports.postVisitor=(data, cb)=>{
    console.log('postVisitor> ' ,data);

    /*
        Prepared Statements
        SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을 방지하기 위한 방법
        입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신, 플레이스 홀더를 사용하여 쿼리 작성
        MYSQL에서는 ?(물음표) 사용

    */
    const sql = 'INSERT INTO visitor (name, comment) VALUES (?, ?)';
    const values =[data.name, data.comment];
    conn.query(sql,values,(err,rows)=>{
        if(err) throw err;

        console.log("Visitor.js >",rows);
        cb(rows.insertId);
    });
}

exports.getVisitor=(id,cb) => {
    const sql = 'SELECT * FROM visitor WHERE id = ?';
    conn.query(sql,[id] ,(err,rows)=>{ // 여긴 왜 id에 대괄호?
        if(err) throw err;

        console.log('getVisitor visitor.js > ', rows);

        cb(rows[0]);
    })

};

exports.patchVisitor=(data,cb)=>{
    const sql = 'update visitor set name=?, comment=? where id =?';
    const values= [data.name, data.comment, data.id];

    conn.query(sql,values,(err,rows)=>{
        if (err) throw err;

        console.log('patchVisitor Visitor.js >',rows);
        cb(rows);
    })
    
}

exports.deleteVisitor = (id, cb)=>{
    console.log(id);
    const sql = 'DELETE FROM visitor WHERE id=?';
    conn.query(sql,[id],(err,rows)=>{
        if(err) throw err;

        console.log('deleteVisitor Visitor.js > ', rows);
        cb(rows);
    })
}