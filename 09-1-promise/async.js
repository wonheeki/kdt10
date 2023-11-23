// async - await
// async : 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 알 수 있다
// - 프로미스를 반환

// const { reject } = require("async");

// await : 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다려줌
// - await 뒤에는 프로미스가 오게 됨
// *async - await 은 짝궁, async 키워드를 사용한 함수 안에서만 await 사용 가능

function goMart(){
    console.log('마트에 와서 어떤 음료를 살지 고민중 ,,')
}

function pickDrink(){
    // 3초 고민(3초 후에 실행)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('고민끝!!')
            product = '콜라';
            price = 1600;
            resolve();
        }, 3000);

    })
}

function pay(product, price){
    console.log(`상품명: ${product}, 가격 : ${price}`);
}

let product, price;
async function exec(){
    goMart();
    await pickDrink();
    pay(product,price);

}

exec();

// async- await 키워드 사용시, 에러처리는 try-catch 문으로!
// async function exec1(){
//     try{
        
//         goMart();
//         await pickDrink();
//         pay(product,price);
//     }catch(error){
//         console.log(error)
//     }
// }

// // then-catch를 쓰면
// goMart();
// pickDrink().then(()=>{
//     // console.log(result)
//     pay(product,price);
// }).catch((error)=>{
//     console.log(error)
// })

// exec1();


