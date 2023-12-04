// const Visitor = require('../model/Visitor');

// exports.main = (req,res)=>{
//     res.render('index');
// }

// exports.get_vistors = (req,res)=>{
//     // [Before]
//     // console.log(Visitor.getVistors()); // [ {}, {} ]
//     // res.render('visitor',{data:Visitor.getVistors()});

//     // [After]
//     Visitor.getVisitors((result)=>{
//         console.log('Cvisitor.js > ',result);
//         res.render('visitor',{data:result});
//     });
// }

// exports.post_visitor = (req,res)=>{
//     console.log(req.body);
//     const {name, comment} =req.body;

//     Visitor.postVisitor(req.body,(result)=>{
//         console.log(result);
//         res.send({id:result,name,comment});
//     });
// }


// // GET /visitor => localhost:PORT/visitor?id=N
// exports.get_vistor = (req,res)=>{
//     console.log(req.query); // { id: '1' }
//     console.log(req.query.id);

//     // 모델에 함수 호출
//     Visitor.getVisitor(req.query.id, (result)=>{
//         // result : rows[0]
//         //  { id: 1, name: '홍길동', comment: '내가 왔다' }
//         console.log('get_visitor Cvisitor.js > ',result);
//         res.send(result);
//     })
// }


// // GET /visitor/:id => localhost:PORT/visitor/N

// exports.get_vistor2 = (req,res)=>{
//     console.log(req.params); // { id: '1' }
//     console.log(req.params.id);

//     // 모델에 함수 호출
//     Visitor.getVisitor(req.params.id, (result)=>{
//         // result : rows[0]
//         //  { id: 1, name: '홍길동', comment: '내가 왔다' }
//         console.log('get_visitor Cvisitor.js > ',result);
//         res.send(result);
//     })
// }


// // PATCH /visitor
// exports.patch_visitor = (req,res)=>{
//     console.log(req.body);

//     Visitor.patchVisitor(req.body,(result)=>{
//         console.log('patchVisitor Cvisitor.js >', result);
//         console.log('>',result);
//         res.send('수정성공');
//     })
    
// }

// // DELETE /visitor
// exports.delete_visitor = (req,res)=>{
//     console.log(req.body);
//     console.log(req.body.id);

//     Visitor.deleteVisitor(req.body.id, (result)=>{
//         console.log('deleteVisitor Cvisitor.js > ',result);
//         res.send('삭제 성공!');
//     })
// }
