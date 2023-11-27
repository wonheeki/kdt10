// function test(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log('test')
//             resolve('wow');
//         }, 1000);
//     })
// }
// // async function exec(){
// //     test();
// // }

// // exec();
// test().then((msg)=>{
//     console.log(msg);
//     console.log('hi')
// })

function pickDrink() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('고민끝!!');
            resolve(); // resolve 안에 아무 값도 없음
        }, 3000);
    });
}

function pay(product, price) {
    console.log(`상품명: ${product}, 가격 : ${price}`);
}

let product, price;

pickDrink()
    .then(() => {
        console.log('Then 블록 실행');
        pay(product, price);
    });